import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet.model';
import { formatDate, LocationStrategy } from '@angular/common';
import { TweetsService } from 'src/app/services/tweets/tweets.service';

@Component({
  selector: 'app-post-tweets-page',
  templateUrl: './post-tweets-page.component.html',
  styleUrls: ['./post-tweets-page.component.css']
})
export class PostTweetsPageComponent implements OnInit {
  
  myFormGroup : FormGroup;
  remainingTweetLength : number;
  remainingTagLength : number;
  tweetLengthExceeded : boolean = false;
  tagLengthExceeded : boolean = false;
  showTweetLength : boolean = false;
  showTagLength : boolean = false;
  showTweetRed : boolean = false;
  showTagRed : boolean = false;
  tweetEmpty : boolean = false;
  showElement : boolean = false;

  tweet : Array<Tweet>;

  userName : string;
  firstName : string;
  lastName : string;
  today= new Date();
  todaysDataTime = '';

  constructor(public router : Router, formBuilder : FormBuilder , public postTweetService : TweetsService) { 
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530')
    this.myFormGroup=formBuilder.group({
      "tweet" : new FormControl("",Validators.required),
      "tag" : new FormControl(""),
    })
  }

  postTweet(){
    // console.log("post called");
    let tweet = this.myFormGroup.controls['tweet'].value;
    
    if(tweet.length == 0){
      this.tweetEmpty = true;
    }
    else{
      
      // creating a tweet
      // sessionStorage.getItem need to be used for getting user name
      let newTweet = new Tweet(
                            sessionStorage.getItem('user'),
                            this.myFormGroup.controls['tweet'].value,
                            sessionStorage.getItem('firstName'),
                            sessionStorage.getItem('lastName'),
                            this.todaysDataTime
                            )
      
      // calling tweet service for uploading tweet 

      this.postTweetService.postTweet(newTweet).subscribe((response : Response)=>{
        // console.log(response);
        //console.log(response.text()); 
      });
  
      // console.log(this.myFormGroup.controls['tweet'].value);
      this.showElement = true;
        setTimeout(function() {
          // console.log('hide');
          this.showElement = false;
        }.bind(this), 3000);
      this.myFormGroup.controls['tweet'].reset();
    //  this.myFormGroup.controls['tag'].reset();
      this.showTweetLength = false;
      //this.showTagLength = false;
    }
    
  }

  tweetLengthValidationMethod(){
    
    let tweet = this.myFormGroup.controls['tweet'].value;
    if(tweet.length!=0){
      this.tweetEmpty = false;
      this.showTweetLength = true;
      this.remainingTweetLength = 145 - tweet.length ;
    }
    else{
      this.showTweetLength = false
    }

    if(tweet.length>=145 && tweet.length!=0){
      this.showTweetRed = true;
      this.tweetLengthExceeded = true;
      
    }else{
      
      this.tweetLengthExceeded = false;
      this.showTweetRed = false;
    }
  }




  // tagLengthValidationMethod(){
    
  //   let tag = this.myFormGroup.controls['tag'].value;
    
  //   if(tag.length!=0){
  //     this.showTagLength = true;
  //     this.remainingTagLength = 50 - tag.length;
  //  }
  //  else{
  //    this.showTagLength = false;
  //  }
  //   if(tag.length>=50 && tag.length!=0){
  //     this.tagLengthExceeded = true;
  //     this.showTagRed = true;
  //   }else{
  //     this.tagLengthExceeded = false;
  //     this.showTagRed = false;
  //   }
  // }

  ngOnInit(): void {
  }

}
