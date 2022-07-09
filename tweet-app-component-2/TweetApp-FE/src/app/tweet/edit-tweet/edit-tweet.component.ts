import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { UserTweet } from 'src/app/model/userTweet';
import { DataService } from 'src/app/service/data.service';
import { TweetActionService } from 'src/app/service/tweet-action.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent implements OnInit {

  usrTweet!: UserTweet;
  tweetText!: string ;
  tags!: string;
  tweetId!: string;
  userId!: string;
  isTag: boolean = false;
  constructor(private router: Router,private dataservice: DataService,private tweetService: TweetActionService) { }

  ngOnInit(): void {
    this.dataservice.currentuserTweet.subscribe(data=>
      {this.usrTweet=Object.assign(data);
        
      });
      console.log(this.usrTweet.tweetId+"Smabi");
    if(this.usrTweet.tweetId !=='')
    {
     

        this.tweetId = this.usrTweet.tweetId;
        this.tweetText = this.usrTweet.tweetText;
        this.userId = this.usrTweet.userId;
        this.tags = this.usrTweet.tags;
    }

  }
  postTweet()
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
   

       var date  = dd.toString()+'/'+mm.toString()+'/'+yyyy.toString();
     let tweet = new UserTweet(this.tweetId,this.userId,date,this.tweetText,this.tags);
     this.tweetService.updateTweet(tweet).subscribe(data=>
      {
       
      })
      this.router.navigate(['/tweet-page/']);
 
  }
  addTags()
  {
   this. isTag = true;
  }

}





