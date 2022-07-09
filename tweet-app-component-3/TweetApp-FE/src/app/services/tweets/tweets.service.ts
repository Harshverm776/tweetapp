import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reply } from 'src/app/model/reply.model';
import { Tweet } from 'src/app/model/tweet.model';
import { TweetResponse } from 'src/app/model/tweetResponse.model';
import { TweetUpdate } from 'src/app/model/tweetUpdate.model';
import {map} from 'rxjs/operators';

const API_URL = "http://hvtweetapp-env.ap-south-1.elasticbeanstalk.com/api/v1.0"


@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(public http  : HttpClient) { }

  getAllTweetsOfUser(userName : string ) : Observable<TweetResponse[]>{
    let headers = new HttpHeaders({'loggedInUser': sessionStorage.getItem('user')});
    return this.http.get<TweetResponse[]>(API_URL+"/tweets/"+userName,{headers});
  }

  replyTweet(reply : string ,id : string){
    // let headers = new HttpHeaders({'tweetReply': reply});
    // console.log(id , reply);
    let cmt = new Reply(reply);
    return this.http.post(API_URL+"/tweets/"+sessionStorage.getItem('user')+"/reply/"+id,cmt).pipe(
      map((successData : Response)=>{
        // console.log("success")
        // console.log(successData)
        return "success";
      }),
      map(failureData=>{
        // console.log(failureData);
        return failureData;
      })
    );;
  }

  likeTweet(id : string){
    // let headers = new HttpHeaders({'tweetId':id});
    return this.http.post(API_URL+"/tweets/"+sessionStorage.getItem('user')+"/like/"+id,null).pipe(
      map((successData : Response)=>{
        // console.log("success")
        // console.log(successData)
        return "success";
      }),
      map(failureData=>{
        // console.log(failureData);
        return failureData;
      })
    );
  }

  disLikeTweet(id : string){
    // let headers = new HttpHeaders({'tweetId':id});
    return this.http.post(API_URL+"/tweets/"+sessionStorage.getItem('user')+"/dislike/"+id,null).pipe(
      map((successData : Response)=>{
        // console.log("success")
        // console.log(successData)
        return "success";
      }),
      map(failureData=>{
        // console.log(failureData);
        return failureData;
      })
    );
  }

  editTweet(id : string){
    return this.http.get(API_URL+"/tweets/"+sessionStorage.getItem('user')+"/"+id);
  }

  updateTweet(id : string, text : string){
    let tweetUpdate = new TweetUpdate(id,text);
    // let headers = new HttpHeaders({'tweetText': text,'tweetId' : id});
    return this.http.put(API_URL+"/tweets/"+sessionStorage.getItem('user')+"/update",tweetUpdate).pipe(
      map((successData : Response)=>{
        // console.log("success")
        // console.log(successData)
        return "success";
      }),
      map(failureData=>{
        // console.log(failureData);
        return failureData;
      })
    );
  }

  postTweet(tweet : Tweet){
    return this.http.post(API_URL+"/tweets/"+sessionStorage.getItem('user')+"/add",tweet);
  }
  
  
  deleteTweet(id : string){
    let headers = new HttpHeaders({'tweetId':id});
    //headers.append("tweetId",id);
    return this.http.delete(API_URL+"/tweets/"+sessionStorage.getItem('user')+"/delete",{headers}).pipe(
      map((successData : Response)=>{
        // console.log("success")
        // console.log(successData)
        return "success";
      }),
      map(failureData=>{
        // console.log(failureData);
        return failureData;
      })
    );;
  }

}
