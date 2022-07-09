import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tweet-frame',
  templateUrl: './tweet-frame.component.html',
  styleUrls: ['./tweet-frame.component.css']
})
export class TweetFrameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openFeed()
  {
    this.router.navigate(['tweet-page/feed']);
  }
  openPostTweet()
  {
    this.router.navigate(['tweet-page/post-tweet']);
  }
  openViewAllUsers()
  {
    this.router.navigate(['tweet-page/view-all-user']);
  }
  openYourTweets()
  {
    this.router.navigate(['tweet-page/show-my-tweet']);
  }
  openOtherUserTweets()
  {
    this.router.navigate(['tweet-page/show-others-tweet']);
  }

}
