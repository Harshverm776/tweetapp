import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserTweet } from '../model/userTweet';
import { Observable } from 'rxjs';
import { TweetReply } from '../model/tweetReply';
import { Like } from '../model/like';

@Injectable({
  providedIn: 'root'
})
export class TweetActionService {
 
  baseUrl = 'http://localhost:8081/api/v1.0/tweets';
  constructor(private http: HttpClient) { }

  postTweet(tweetData: UserTweet): Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}/add`,tweetData);
  }

  getAllLikes(): Observable<any>
  {
    return this.http.get<any>(`${this.baseUrl}/getLikes`);
  }
  postReply(reply: TweetReply) {
    return this.http.post<any>(`${this.baseUrl}/reply`,reply);
  }
  postLike(data: Like): Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}/addLike`,data);

  }
  viewReply(tweetData:UserTweet): Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}/getReply`,tweetData);
  }
  
  updateTweet(tweetData: UserTweet): Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}/update`,tweetData);
  }
  deleteTweet(tweetID: string): Observable<any>
  {
          return this.http.delete(`${this.baseUrl}/update/${tweetID}`,);
  }

}
