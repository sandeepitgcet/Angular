import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string="Sandeep";
  password: string="Singh";
  isVisible: boolean=true;
  responseMessage: string='';

  // loginHandler(u:string, p:string){
  //   console.log("Login Component -->>  loginHandler()");
  //   this.responseMessage=this.auth.login(this.username,this.password);
  // }

  loginHandler(value:any){
    console.log("Login Component -->>  loginHandler()", "Parameter:" ,value);
    this.responseMessage=this.auth.login(value.username, value.pass);
  }

  getValues(value:any){
    console.log("Login Component -->>  getValues()");
    //this.username=value.username;
    //this.password=value.password;
    console.log(value);
  }
//Dependency Injection
  constructor(private auth: AuthService) { 

   }

  ngOnInit(): void {
  }

}
