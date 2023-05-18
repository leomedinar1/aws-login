import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import   {Amplify, Auth } from 'aws-amplify';


Amplify.configure({
  Auth:{
    mandatorySignIn: true,
    region: 'us-east-2',
    userPoolId:'us-east-2_Bm9CTWtJp',
    userPoolWebClientId:'2gvgamragun37ji48ldofeonne',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }
})
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
