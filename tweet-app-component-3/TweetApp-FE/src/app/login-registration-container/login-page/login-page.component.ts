
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/model/authentication-request.model';
import { UserModel } from 'src/app/model/UserModel.model';
import { UserAuthService } from 'src/app/services/user-login/user-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  myFormGroup : FormGroup;
  emailValid : boolean = false;
  nullValueErrorMessage : boolean = false;
  data : Array<UserModel>;
  invalid : boolean = false;
  
  constructor(formBuilder : FormBuilder , public router : Router , public  loginService : UserAuthService ) {
    this.myFormGroup=formBuilder.group({
      "email" : new FormControl("",[Validators.required, Validators.email]),
      "password" : new FormControl("", [Validators.required])
    })
   }

  



  
   emailValidation(email : HTMLInputElement){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    {
      this.emailValid = false;
      // console.log(this.emailValid)
    }
    else{
  
      this.emailValid = true;
      // console.log(this.emailValid)
    }
    if(email.value.length==0){
      this.emailValid = false
    }else{
      this.nullValueErrorMessage = false;
    }
  }  

  passwordEmpty(){
    if(this.myFormGroup.controls['password'].value.length!=0){
      this.nullValueErrorMessage = false;
    }
    else{
      this.nullValueErrorMessage = true;
    }
  }

  //login of user method
  login(){
    if(this.myFormGroup.controls['email'].value.length!=0 && this.myFormGroup.controls['password'].value.length!=0){
  
    let userCredentials = new AuthenticationRequest(this.myFormGroup.controls['email'].value,this.myFormGroup.controls['password'].value)
    this.loginService.login(userCredentials).subscribe((successData)=>{
      // console.log("succ");
      // console.log("LOGIN SUCCESS");
      sessionStorage.setItem("user",userCredentials.username);
      sessionStorage.setItem("firstName",successData.firstName);
      sessionStorage.setItem("lastName",successData.lastName);
      sessionStorage.setItem("password",successData.password);
      this.router.navigate(['/home']);
      // console.log(successData)
    },failureData => {
      // console.log("fail");
      this.invalid = true;
      // console.log(failureData);
    })

    this.nullValueErrorMessage = false;
  }
  else{
    this.nullValueErrorMessage = true;
  }
}
  ngOnInit(): void {
    
  }

}
