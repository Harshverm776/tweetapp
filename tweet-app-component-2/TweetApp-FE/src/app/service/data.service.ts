import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserTweet } from '../model/userTweet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   user = new UserTweet("","","","","");
  private userTweet = new BehaviorSubject(this.user);
  currentuserTweet = this.userTweet.asObservable();
  
  setRole(userTweet: UserTweet) {
    this.userTweet.next(userTweet);
  }
}
