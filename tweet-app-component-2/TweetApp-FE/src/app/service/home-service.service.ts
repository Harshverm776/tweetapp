import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  baseUrl = 'http://localhost:8081/api/v1.0/tweets';
  constructor(private http: HttpClient, private _router: Router) { }

  registserUser(user: Users): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }

  getAllDisplayUsers(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/users/all`);

  }

  loginUser(user:Login): Observable<any>{
  
    return this.http.post<any>(`${this.baseUrl}/login`,user);
  }
  getTwitterFeed(): Observable<any>
  {

    return this.http.get(`${this.baseUrl}/all`)
  }
  getUser(login: Login): Observable<any>{
    console.log("inside get display");
    return this.http.post<any>(`${this.baseUrl}/users/search`,login);
  }
  getMyTweets(login: Login): Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}/myTweet`,login);
  }
  forgotPassword(user: Login): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/users/changepassword`, user);

  }

}
function responseType<T>(arg0: string, user: Login, responseType: any, arg3: string): Observable<any> {
  throw new Error('Function not implemented.');
}

