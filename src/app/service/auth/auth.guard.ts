import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginauth:LoginService,private router:Router){

  }
  canActivate(){
    if(this.loginauth.islogedin()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
