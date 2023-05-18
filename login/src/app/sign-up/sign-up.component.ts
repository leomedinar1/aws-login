import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Auth} from 'aws-amplify';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  firstName ="";
  lastName = "";
  email="";
  password="";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    try {
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
        attributes:{
          email:this.email,
          given_name: this.firstName,
          family_name: this.lastName
        }
      });
      alert('User signup completed, please check your email');
      this.router.navigate(['login']);
      
    } catch (error) {
      console.log(error);
      alert('Error on User signup');
    }
  }
}
