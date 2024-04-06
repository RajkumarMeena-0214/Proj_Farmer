import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import { KisanComponent } from './kisan/kisan.component';
import { KisanlistComponent } from './kisanlist/kisanlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardComponent,
    NavebarComponent,
    FooterComponent,
    KisanComponent,
    KisanlistComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
