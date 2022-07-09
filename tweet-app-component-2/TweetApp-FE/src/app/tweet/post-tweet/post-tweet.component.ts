import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTweet } from 'src/app/model/userTweet';
import { DataService } from 'src/app/service/data.service';
import { TweetActionService } from 'src/app/service/tweet-action.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  tweetText!: string;
  tags!: string;
  tweetId!: string;
  userId!: string;
  isTag: boolean = false;

  constructor(private tweetservice: TweetActionService,private router: Router) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('userId') || '{}');
  }
  

  postTweet()
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.tweetId = generateTweetId();

       var date  = dd.toString()+'/'+mm.toString()+'/'+yyyy.toString();
    //  let date = obj.getFullYear.toString()+','+obj.getMonth.toString()+'-'+obj.getDay.toString();
     let tweet = new UserTweet(this.tweetId,this.userId,date,this.tweetText,this.tags);
     this.tweetservice.postTweet(tweet).subscribe(data=>
      {
        
      });
      this.router.navigate(['/tweet-page/']);
 
  }
  addTags()
  {
   this. isTag = true;
  }

}
function generateTweetId(): string{
  var currentTimeInSeconds=Math.floor(Date.now()/1000);
  let idGen = currentTimeInSeconds+ JSON.parse(localStorage.getItem('userId') || '{}');
  
  return idGen;
}

