import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {
  name : string;
  constructor() {}
  
  logout(){
    // console.log("logout called!")
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('firstName').toLocaleUpperCase();
  }

}
