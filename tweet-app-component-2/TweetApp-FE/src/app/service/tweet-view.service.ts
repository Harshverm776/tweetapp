import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class TweetViewService {
  baseUrl = 'http://localhost:8081/api/v1.0/tweets';
  constructor(private http: HttpClient) { }

  getAllTweets(login: Login): Observable<any>
  {
   
    // return this.http.get(`${this.baseUrl}/all`);
    return this.http.post<any>(`${this.baseUrl}/login`,login);

  }
  getUsers(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/users/all`);

  }
  searchUserByName(userName: string): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/user/search/${userName}`);

  }
  getTweetsOfUser(userName: string): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/username/${userName}`);
  }
}
