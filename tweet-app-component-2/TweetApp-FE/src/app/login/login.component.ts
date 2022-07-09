import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private homeservice: HomeServiceService) { }
   userId : string = '';
   password!: string;
   loginData!: Login;
   inValidLogin: boolean = false; 
   check : string ="run";
   
    
  ngOnInit(): void {
  }
  forgotPassword()
  {
    this.router.navigate(["/forgotPassword"]);
  }
  validateLogin()
  {
    console.log("login Method");
    let login = new Login(this.userId,this.password);
    this.homeservice.loginUser(login).subscribe((data)=>
    {
      if(data==null)
      {
       this.inValidLogin = true  ;
       localStorage.clear(); 
      }
      else
      {
      this.loginData = Object.assign(data);
      this.userId = this.loginData.userId;
      localStorage.setItem('userId',JSON.stringify(this.userId));
      this.userId = JSON.parse(localStorage.getItem('userId') || '{}');
      this.router.navigate(['/tweet-page/']);
      
      }
     
    });

    if(this.loginData == null)
    {
      // localStorage.clear
      // this.router.navigate(['']);
      console.log("Null val")
    }
    else{
      console.log(" not Null val")
      
    }
  }

  getUserId() {
    console.log(localStorage.getItem('userId'));
    return localStorage.getItem('userId');
  }

  registerPage()
  {
    this.router.navigate(['/register']);
  }



}
