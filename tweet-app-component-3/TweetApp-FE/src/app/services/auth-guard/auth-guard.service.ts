import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router : Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.isUserLoggedIn())
        return true;
    else{
      this.router.navigate(['/login']);
      return false;
    }    
        
}

  isUserLoggedIn(): boolean{
    let user = sessionStorage.getItem('user');
    if(user == null)
      return false;
    return true;  
  }
}
