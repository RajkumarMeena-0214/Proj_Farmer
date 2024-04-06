import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ DashboardComponent } from './dashboard/dashboard.component';
import { KisanComponent } from './kisan/kisan.component';
import { KisanlistComponent } from './kisanlist/kisanlist.component';

const routes: Routes = [

{
  path:'',
  redirectTo:'dashboard',
  pathMatch:'full'
},


{
  path:'dashboard',
  component: DashboardComponent
},

  {
    path:'farmerlist',
    component: KisanlistComponent

  },
  {
    path:'farmer',
    component: KisanComponent

  },{
    path:"farmer/:id",
    component:KisanComponent
  }

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
