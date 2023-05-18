import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Auth} from 'aws-amplify';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username ="";
  password ="";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 async doLogin(){
    try{
      var user = await Auth.signIn(this.username.toString(), this.password.toString());
      var tokens = user.signInUserSession;
      if(tokens != null){
        alert("User logeed successfully")
        this.router.navigate(["home"])
      }
    }catch(error){
      console.log(error)
      alert("Authentication failed")
    }
  }
}
