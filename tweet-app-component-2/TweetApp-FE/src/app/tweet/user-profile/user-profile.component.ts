import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayUserPojo } from 'src/app/model/displayUserPojo';
import { Login } from 'src/app/model/login';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: string = "dummy";
  constructor(private router: Router,private userService: HomeServiceService) { }
  displayUser?: DisplayUserPojo
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('userId') || '{}');
    let user = new Login(this.userId,"dummy");
     if(this.userId != null)
     {
       this.userService.getUser(user).subscribe((data)=>
       {
        this.displayUser = Object.assign(data);

       })

     }
     else
     {
       this.router.navigate(['']);
     }
  }

  logout()
  {
    
    this.router.navigate(['/login']);
  }

}
