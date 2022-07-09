import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForgotPasswordComponent } from './login-registration-container/forgot-password/forgot-password.component';
import { LoginPageComponent } from './login-registration-container/login-page/login-page.component';
import { RegistrationPageComponent } from './login-registration-container/registration-page/registration-page.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { PostTweetsPageComponent } from './user-activity-container/post-tweets-page/post-tweets-page.component';
import { ShowTweetsPageComponent } from './user-activity-container/show-tweets-page/show-tweets-page.component';
import { ViewUsersPageComponent } from './user-activity-container/view-users-page/view-users-page.component';
import { ViewUsersTweetsComponent } from './user-activity-container/view-users-tweets/view-users-tweets.component';


const routes: Routes = [
  {path : "" , redirectTo : "login", pathMatch : "full"},
  {path : "login", component : LoginPageComponent},
  // {path:'register', loadChildren:()=>import('./login-registration-container/registration-page/registration-page.component').then(m=>m.RegistrationPageComponent)},
  {path : "register", component : RegistrationPageComponent},
  {path : "show-tweet", component : ShowTweetsPageComponent,canActivate : [AuthGuardService]},
  {path : "home", component : ShowTweetsPageComponent,canActivate : [AuthGuardService]},
  {path : "post", component : PostTweetsPageComponent,canActivate : [AuthGuardService]},
  {path : "users", component : ViewUsersPageComponent,canActivate : [AuthGuardService]},
  {path : "user-tweets/:username", component : ViewUsersTweetsComponent,canActivate : [AuthGuardService]},
  {path : "forgot", component : ForgotPasswordComponent},
  {path : "**", component: ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
