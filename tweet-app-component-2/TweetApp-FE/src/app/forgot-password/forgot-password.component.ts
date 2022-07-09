import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router,private homeservice: HomeServiceService) { }
  userId : string = '';
   password!: string;
   loginData!: Login;
   validForm: boolean = true;
   confirmPassword?: string;
   isPassword: boolean = false;
   passChange: boolean  = false;
  ngOnInit(): void {
  }
 changePassword()
 {
    let login = new Login(this.userId,this.password);
     this.homeservice.forgotPassword(login).subscribe(data=>
      {
      this.loginData = Object.assign(data);
      if(this.loginData.userId !=null)
      {
        this.router.navigate(['/login']);
      }
      else{
         this.passChange = true;
      }
      }
      )
 }
 onCheckPassword()
 {
   this.validForm = true;
 this.isPassword = false;
 if(this.password != this.confirmPassword)
 {
   this.isPassword = true;
   this.validForm = false;
 }
 }
 onpass()
 {
   if(this.password!=null)
   {
   this.onCheckPassword()
   }
 }
}
