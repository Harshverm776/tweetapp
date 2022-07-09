import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TweetResponse } from 'src/app/model/tweetResponse.model';
import { TweetsService } from 'src/app/services/tweets/tweets.service';

@Component({
  selector: 'app-view-users-tweets',
  templateUrl: './view-users-tweets.component.html',
  styleUrls: ['./view-users-tweets.component.css']
})
export class ViewUsersTweetsComponent implements OnInit {
  
  myFormGroup : FormGroup;
  today= new Date();
  todaysDataTime = '';
  clickedReplyButton : {[key: number] : boolean} ={};
  enablePostButton : boolean = false;
  showElement : boolean = false;
  searchedUserTweets : string;
  tweets : TweetResponse[];
  returnedTweets : TweetResponse[];
  noTweets : boolean = false;
  likedTweetPopup : boolean = false;
  disLikedTweetPopup : boolean = false;

  constructor(formBuilder : FormBuilder, public activeRoute : ActivatedRoute , public tweetService : TweetsService) {
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    this.myFormGroup=formBuilder.group({
      "reply" : new FormControl("",Validators.required),
    })

  }

  likeTweet(id : string){
    // console.log(id);
    this.tweetService.likeTweet(id).subscribe((response)=>{
      // console.log(response);
      if(response == "success"){
        this.getAllTweets();
        this.likedTweetPopup = true;
        setTimeout(function() {
          // console.log('hide');
          this.likedTweetPopup = false;
        }.bind(this), 3000);
      }
    },
    // failure function
    failureData => {
      // console.log(failureData);
    });
  }
  
  disLikeTweet(id : string){
    // console.log(id);
    this.tweetService.disLikeTweet(id).subscribe((response)=>{
      // console.log(response);
      if(response == "success"){
        this.getAllTweets();
        this.disLikedTweetPopup = true;
        setTimeout(function() {
          // console.log('hide');
          this.disLikedTweetPopup = false;
        }.bind(this), 3000);
      }
    },
    // failure function
    failureData => {
      // console.log(failureData);
    });
  }


  isReplyClicked(index : number){
    // console.log(index);
    if(this.clickedReplyButton[index]==false){
    this.clickedReplyButton[index] = true;
  }
    else
    this.clickedReplyButton[index] = false;
  }


  replyTweet(id : string){
    let reply = this.myFormGroup.controls['reply'].value;
    if(reply.length==0){
      alert("Reply can't be empty");
    }
    else{
        // alert("commented!");
        //console.log(id)
        this.tweetService.replyTweet(reply,id).subscribe((response=>{
          // console.log(response);
          if(response=="success"){
            this.myFormGroup.controls['reply'].reset();
            this.showElement = true;
            this.getAllTweets();
            setTimeout(function() {
              // console.log('hide');
              this.showElement = false;
            }.bind(this), 3000);
          }
          
        }),
        // failure function
        failureData => {
          // console.log(failureData);
        });
        
      }
    }
  
  getAllTweets(){
    this.activeRoute.params.subscribe((parameter => this.searchedUserTweets = parameter["username"]));
     console.log(this.searchedUserTweets);  
    this.tweetService.getAllTweetsOfUser(this.searchedUserTweets).subscribe(response =>{
      let currentUser =  sessionStorage.getItem('user');
      this.returnedTweets = response;
      console.log(this.returnedTweets);
      console.log(currentUser);
      this.tweets = response;
      for(let res of response){
        if(res.username != currentUser){
          this.tweets = this.tweets.filter(res => res.username=== this.searchedUserTweets);
           console.log(this.tweets);
        }
      }
         console.log(this.tweets);
        if(this.tweets.length!=0){
          this.noTweets = false;
        }else{
          this.noTweets = true;
        }        
      });  
  }
  
  showButton(){
    let reply = this.myFormGroup.controls['reply'].value;
    // console.log(reply);
    if(reply.length==0){
      this.enablePostButton = false;
    }else{
      this.enablePostButton = true;
    }
  }


  ngOnInit(): void {
      this.getAllTweets();
      // setInterval(()=>{
      //   // console.log("called set interval");
      //   this.getAllTweets();
      // },5000) 
    }    
  }
