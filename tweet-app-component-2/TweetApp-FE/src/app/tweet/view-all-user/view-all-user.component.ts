import { Component, OnInit } from '@angular/core';
import { DisplayUserPojo } from 'src/app/model/displayUserPojo';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {

  constructor(private userservice: HomeServiceService) { }
  users: DisplayUserPojo[] = [];
  ngOnInit(): void {
     this.userservice.getAllDisplayUsers().subscribe(data=>
    this.users = data.slice() );
  }

}
