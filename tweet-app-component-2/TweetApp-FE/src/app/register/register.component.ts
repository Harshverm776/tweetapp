import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayUserPojo } from '../model/displayUserPojo';
import { Users } from '../model/users';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  firstName!: string;
  lastName!: string;
  email !:string;
  userId !: string;
  password !: string;
  confirmPassword?: string;
  contactNumber !: string;
  usersList: DisplayUserPojo[] = [];

  validForm: boolean = true;
  isEmail: boolean = false;
  isUserName: boolean = false;
  isPassword: boolean = false;
  errorMessage: any;
  currentStatus!: String;
  constructor(private router: Router,private homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.homeService.getAllDisplayUsers().subscribe((data)=>
      {
        this.usersList = data.slice();
        console.log(data);
      })

     
  }
  onKeyEmail( )
  {
    this.isEmail = false;
    this.validForm = true;
    for(let i=0;i<this.usersList.length;i++)
    {
      if(this.usersList[i].email === this.email)
      {
        this.isEmail = true;
        this.validForm = false;
      }
    }
  }

  onCheckUserName()
  {
    this.validForm = true;
    this.isUserName = false;
    for(let i=0;i<this.usersList.length;i++)
    {
      if(this.usersList[i].userId === this.userId)
      {
        this.isUserName = true;
        this.validForm = false;
      }
    }

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
  register()
  {
    let user = new Users(this.firstName,this.lastName,this.email,this.userId,this.password,this.contactNumber);
    this.homeService.registserUser(user).subscribe(data=>{
    });

   
      this.router.navigate(['/login']);
   

    
  }

}
