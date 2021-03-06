'use strict'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatTableModule,MatSortModule} from '@angular/material';
//import {UserService } from './user.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
//import { Ng2OrderModule } from 'ng2-order-pipe';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular5-social-login";



// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("725788246595-gl8aa9vmtk34svar9tk04hubmql72mff.apps.googleusercontent.com")
      },
    ]
);
return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    //MatTableModule,
   // MatSortModule,
   SocialLoginModule,
   BrowserModule,
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
   // Ng2OrderModule,
    GooglePlaceModule,
    RouterModule.forRoot([
      {
  path: 'login/dashboard',
  component:DashboardComponent

      },
     
      {
        path: 'login',
        component:LoginComponent
      
            },
     
      


    ])
    
  ],
providers: [{
  provide: AuthServiceConfig,
  useFactory: getAuthServiceConfigs
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
