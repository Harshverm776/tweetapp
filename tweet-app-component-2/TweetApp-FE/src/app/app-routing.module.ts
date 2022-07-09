import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditTweetComponent } from './tweet/edit-tweet/edit-tweet.component';
import { PostTweetComponent } from './tweet/post-tweet/post-tweet.component';
import { ShowMyTweetComponent } from './tweet/show-my-tweet/show-my-tweet.component';
import { ShowOthersTweetComponent } from './tweet/show-others-tweet/show-others-tweet.component';
import { TweetFeedComponent } from './tweet/tweet-feed/tweet-feed.component';
import { TweetFrameComponent } from './tweet/tweet-frame/tweet-frame.component';
import { ViewAllUserComponent } from './tweet/view-all-user/view-all-user.component';

const routes: Routes = [ { path: '', redirectTo: '/login', pathMatch: 'full' },
 
// {path:'',component: SearchComponent},
{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'forgotPassword',component: ForgotPasswordComponent},

{path:'tweet-page',component:TweetFrameComponent,
children:[
  {path:'',component:TweetFeedComponent },
  {path:'feed',component: TweetFeedComponent},
  {path:'post-tweet',component:PostTweetComponent},
  {path: 'update-tweet',component: EditTweetComponent},
  {path:'view-all-user',component:ViewAllUserComponent},
  {path: 'show-my-tweet',component:ShowMyTweetComponent},
  {path: 'show-others-tweet',component:ShowOthersTweetComponent}]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
