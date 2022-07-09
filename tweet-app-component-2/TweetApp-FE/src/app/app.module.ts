import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TweetFrameComponent } from './tweet/tweet-frame/tweet-frame.component';
import { UserProfileComponent } from './tweet/user-profile/user-profile.component';
import { TweetFeedComponent } from './tweet/tweet-feed/tweet-feed.component';
import { PostTweetComponent } from './tweet/post-tweet/post-tweet.component';
import { ViewAllUserComponent } from './tweet/view-all-user/view-all-user.component';
import { ShowMyTweetComponent } from './tweet/show-my-tweet/show-my-tweet.component';
import { ShowOthersTweetComponent } from './tweet/show-others-tweet/show-others-tweet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditTweetComponent } from './tweet/edit-tweet/edit-tweet.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    TweetFrameComponent,
    UserProfileComponent,
    TweetFeedComponent,
    PostTweetComponent,
    ViewAllUserComponent,
    ShowMyTweetComponent,
    ShowOthersTweetComponent,
    EditTweetComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
