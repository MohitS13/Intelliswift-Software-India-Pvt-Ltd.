import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router,private helper:HttpClient) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.IsLoggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }


  IsLoggedIn()
  {
    if(window.sessionStorage.getItem("isActive") != null 
    && 
    window.sessionStorage.getItem("isActive") == "1")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  checkCredentials(credentials)
  {
    if(credentials.UserName == "abc" && credentials.Password == "abc$123")
    {
      window.sessionStorage.setItem("isActive", "1");
      return true;
    }
    else
    {
      return false;
    }
  }
}
