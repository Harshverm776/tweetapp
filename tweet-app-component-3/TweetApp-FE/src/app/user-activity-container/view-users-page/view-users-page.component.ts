import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel.model';
import { UserRegistrationService } from 'src/app/services/user-registration/user-registration.service';

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.css']
})
export class ViewUsersPageComponent implements OnInit {

  myFormGroup : FormGroup;
  showSearchedText : boolean = false;
  searchedText : string;
  enableButtonForSearch : boolean = false;
  userModel : UserModel[];
  noUsersToDisplay : boolean = false;
  constructor(formBuilder : FormBuilder, public userService : UserRegistrationService, public router : Router) { 
    this.myFormGroup=formBuilder.group({
      "search" : new FormControl("",Validators.required),
    })
  }

  // enable search button

  enableSearchButton(){
    let enteredUserName = this.myFormGroup.controls['search'].value;
    if(enteredUserName.length>0){
      // this.noUsersToDisplay = false;
      this.enableButtonForSearch = true;
    }else{
      this.enableButtonForSearch = false;
    }

  }

  //search for user

  search(){
    // console.log("called search")
    let enteredUserName = this.myFormGroup.controls['search'].value;
    if(enteredUserName.length>0){
      this.userService.searchUser(enteredUserName).subscribe(response=>{
        let currentUser = sessionStorage.getItem('user');
        this.userModel = response;
        for(let res of response){
          if(res.username.includes(enteredUserName)){
            this.userModel = this.userModel.filter(res => res.username.includes(enteredUserName));
            // console.log(this.userModel);
          }
        }
        if(this.userModel.length==0){
          this.noUsersToDisplay = true;
        }else{
          this.noUsersToDisplay = false;
        }
        // console.log(response);
      })
      this.showSearchedText = true;
      this.searchedText = enteredUserName;
      this.myFormGroup.controls['search'].reset();
      this.enableButtonForSearch = false;
    }
    else{
    this.showSearchedText = false;  
    }
    // console.log(enteredUserName);
  }

  getDetails(username : string){
    // console.log(username);
    this.router.navigate(['/user-tweets/'+username]);
  }

  
  ngOnInit(): void {
    if(this.enableButtonForSearch){
      this.search();
    }else{
      this.userService.getAllUsers().subscribe(response =>{
        // this.userModel = response;
        let currentUser = sessionStorage.getItem('user');
        this.userModel = response;
        for(let res of response){
          if(res.username != currentUser){
            this.userModel = this.userModel.filter(res => res.username!== currentUser);
            // console.log(this.userModel);
          }
        }
        if(this.userModel.length==0){
          this.noUsersToDisplay = true;
        }else{
          this.noUsersToDisplay = false;
        }
          // console.log(this.userModel);
       })
    }
    
  }

}
