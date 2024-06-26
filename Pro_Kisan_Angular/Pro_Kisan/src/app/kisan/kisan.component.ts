import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-kisan',
  templateUrl: './kisan.component.html',
  styleUrls: ['./kisan.component.css']
})
export class KisanComponent implements OnInit {


  form  : any= {
    id: null,
    ownerName: '',
    company: '',
    model: '',
    price: '',
    purchaseDate: '',
    message: '',
  
  }
  list: any = []
  fileToUpload: any = null;
  inputerror: any = {};



  constructor(private httpService: HttpServiceService, private httpClient: HttpClient, private route: ActivatedRoute) {
    var self = this;
    httpService.getPathVariable(route, function (params: any) {
      self.form.id = params["id"];
    })
  }

  ngOnInit(): void {
   
    if (this.form.id && this.form.id > 0) {
      this.display();
    }
  }
  


  display() {
    var self = this;
    this.httpService.get('http://localhost:8080/User/get/' + self.form.id, function (res: any) {
      self.form = res.result.data;
    });
  }

  onFileSelect(event: any) {
    this.fileToUpload = event.target.files.item(0);
    console.log(this.fileToUpload);
  }

  myFile() {
    var self = this;
    const formData = new FormData();
    formData.append('file', this.fileToUpload);
    return this.httpClient.post("http://localhost:8080/User/profilePic/" + self.form.id, formData).subscribe(data => {
      console.log(this.fileToUpload);
    }, error => {
      console.log(error);
    });;
  }

  save() {
    var self = this;
    this.httpService.post('http://localhost:8080/User/save', this.form, function (res: any) {
      self.form.message = '';
      self.inputerror = {};
      if ((res.result.inputerror)) {
        self.inputerror = res.result.inputerror;
      }
    self.myFile();
      console.log("price>>>>>",self.form.bookPrice)
      console.log("dob>>>>>>>>>>",self.form.purchaseDate)
      self.form.id = res.result.data;
      console.log(self.form.id)
      
      
    });
  }
  convertISODate(isoDate: string): string {
    return isoDate.split('T')[0];
  }

 
}

 
