import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from 'src/app/model/email.model';
import { UserModel } from 'src/app/model/UserModel.model';
import { UserRegistrationService } from 'src/app/services/user-registration/user-registration.service';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  myFormGroup: FormGroup;
  passwordValidation: boolean = false;
  prePasswordCheck: boolean = false;
  passwordLength: boolean = false;
  emailValid: boolean = false;
  //contactValid : boolean = false;
  phoneValidation: boolean = false;
  phoneValidationIsNan: boolean = false;
  sussesfullyRegistered: boolean = false;
  showElement: boolean = false;
  userDate: Date;
  emailNotAvailable: boolean = false;

  usersList: Array<UserModel>
  email: Array<Email>

  constructor(formbuilder: FormBuilder, public router: Router, public userRegistrationService: UserRegistrationService) {
    this.myFormGroup = formbuilder.group({
      "firstName": new FormControl("", [Validators.required]),
      "lastName": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required]),
      "rePassword": new FormControl("", [Validators.required]),
      "date": new FormControl("", Validators.required),
      "contact": new FormControl("", Validators.required)
    })
  }






  //check if password and repassword are same

  checkPassword(password: HTMLInputElement, rePassword: HTMLInputElement) {
    if (password.value.length != 0) {
      this.prePasswordCheck = false;
      if (password.value == rePassword.value || rePassword.value.length == 0) {
        this.passwordValidation = false;
      } else {
        this.passwordValidation = true;
      }
    } else {
      this.prePasswordCheck = true;
    }
    if (rePassword.value.length == 0) {
      this.prePasswordCheck = false;
    }
    if (this.prePasswordCheck) {
      rePassword.value = "";
    }
  }

  // Check prePassword
  checkPrePassword(password: HTMLInputElement) {
    if (password.value.length >= 6 && password.value.length <= 12) {
      this.passwordLength = false;
    }
    else {
      this.passwordLength = true;
    }
    if (password.value.length != 0) {
      this.prePasswordCheck = false;
    } else {
      this.passwordLength = false;
    }
  }

  //Email Validation

  emailValidation(email: HTMLInputElement) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
      this.emailValid = false;
    }
    else {
      this.emailValid = true;
    }
    if (email.value.length == 0) {
      this.emailValid = false
    }
  }

  // validate Phone number
  phoneNumberValidaton(number: HTMLInputElement) {
    let mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";
    if (number.value.match(mobilePattern) || number.value.length == 0) {
      this.phoneValidation = false;
    } else {
      this.phoneValidation = true;
    }
    if (!Number.isNaN(parseInt(number.value)) || number.value.length == 0) {
      this.phoneValidationIsNan = false;
    }
    else {
      this.phoneValidationIsNan = true;
    }
  }


  //change date format to YYYY-MM-DD
  checkDate() {
    // console.log("called check date")
    this.userDate = this.myFormGroup.controls['date'].value;
    // console.log(this.userDate);
  }





  //registering the user

  register() {
    // console.log(this.emailValid,this.passwordLength,this.passwordValidation,this.phoneValidation);
    if (!this.emailValid &&
      !this.passwordLength &&
      !this.passwordValidation &&
      !this.phoneValidation) {

      if (this.myFormGroup.controls['firstName'].value.length != 0 &&
        this.myFormGroup.controls['lastName'].value.length != 0 &&
        this.myFormGroup.controls['email'].value.length != 0 &&
        this.myFormGroup.controls['password'].value.length != 0 &&
        this.myFormGroup.controls['rePassword'].value.length != 0 &&
        this.myFormGroup.controls['contact'].value.length != 0) {

        let user = new UserModel(
          this.myFormGroup.controls['email'].value,
          this.myFormGroup.controls['firstName'].value,
          this.myFormGroup.controls['lastName'].value,
          this.myFormGroup.controls['email'].value,
          this.myFormGroup.controls['password'].value,
          this.myFormGroup.controls['contact'].value,
        )

        this.userRegistrationService.addNewUser(user).subscribe((response) => {
          // console.log(response);
          // console.log("register user");
          this.myFormGroup.controls['firstName'].reset();
          this.myFormGroup.controls['lastName'].reset();
          this.myFormGroup.controls['email'].reset();
          this.myFormGroup.controls['password'].reset();
          this.myFormGroup.controls['rePassword'].reset();
          this.myFormGroup.controls['contact'].reset();
          this.showElement = true;
          setTimeout(function () {
            // console.log('hide');
            this.showElement = false;
            this.router.navigate(['/login'])
          }.bind(this), 3000);
        },
          // failure function
          failureData => {
            // console.log(failureData);
            //alert("email alredy taken")
            this.emailNotAvailable = true;
            setTimeout(function () {
              // console.log('hide');
              this.emailNotAvailable = false;
            }.bind(this), 3000);
          });
      }
      else {
        alert("Required every Field");
      }
    } else {
      alert("enter valid details");
    }

  }



  ngOnInit(): void {
    this.userRegistrationService.getAllUsers();
  }

}
