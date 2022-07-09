import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Like } from 'src/app/model/like';
import { Login } from 'src/app/model/login';
import { TweetReply } from 'src/app/model/tweetReply';
import { UserTweet } from 'src/app/model/userTweet';
import { DataService } from 'src/app/service/data.service';
import { HomeServiceService } from 'src/app/service/home-service.service';
import { TweetActionService } from 'src/app/service/tweet-action.service';
import { TweetViewService } from 'src/app/service/tweet-view.service';

@Component({
  selector: 'app-tweet-feed',
  templateUrl: './tweet-feed.component.html',
  styleUrls: ['./tweet-feed.component.css']
})
export class TweetFeedComponent implements OnInit {

  constructor(private homeService: HomeServiceService,private router: Router,private dataservice: DataService,private tweetservice: TweetActionService) { }
   expand: boolean = false;
   tweets: UserTweet[] = [];
   replies: TweetReply[] = [];
   isViewReply: boolean = false;
   tweetId!: string;
   isTag: boolean = false;
   rTweetId!: string;
   replyform: boolean = false; 
   userId!: string;
   editId !: string;
   replyTime!: string;
   replyText!: string;
   likeId! : string;
   tags!: string;
   unitId!: string;
  ngOnInit(): void {
    this.editId = JSON.parse(localStorage.getItem('userId') || '{}');

    this.replyform = false;
    this.homeService.getTwitterFeed().subscribe(data=>
      {
        this.tweets = data.slice();
      });
  }
  viewReply(tweetData: UserTweet)
  {
    this.expand = !this.expand;
    this.unitId = tweetData.tweetId;
     this.tweetservice.viewReply(tweetData).subscribe(data =>
      {
        this.replies = data.slice();
        
        console.log("This replies"+data);
      })
      for(let i=0;i<this.replies.length;i++)
      {
          this.rTweetId = this.replies[0].tweetId;

      }
     
  }
  editTweet(tweetData: UserTweet)
  {
    this.dataservice.setRole(tweetData);
    this.router.navigate(['/tweet-page/update-tweet']);
  }
  addReply(id: string)
  {
   this.unitId = id;
   this.replyform = !this.replyform;
  }
  addTags()
  {
   this. isTag = true;
  }
  postreply(id: string)
  {
    this.replyform = ! this.replyform;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.tweetId = id;

       var date  = dd.toString()+'/'+mm.toString()+'/'+yyyy.toString();
    //  let date = obj.getFullYear.toString()+','+obj.getMonth.toString()+'-'+obj.getDay.toString();
     let reply = new TweetReply(this.tweetId,this.userId,date,this.replyText,this.tags);
     this.tweetservice.postReply(reply).subscribe(data=>
      {
        
      });
      this.replyform = false;
      this.replyText = "";
      this.tags =  "";
      this.router.navigate(['tweet-feed']);
 
  }
  
like(id: string)
{
  this.likeId = id;
  this.userId = JSON.parse(localStorage.getItem('userId') || '{}');
     let like = new Like(id,this.userId)
     this.tweetservice.postLike(like).subscribe(data=>
      {
      console.log(data);
      }
      )
}
}
