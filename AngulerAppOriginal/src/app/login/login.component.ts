import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
  }

  SignIn(loginForm)
  {
    let loginCredentials = loginForm.form.value;
    console.log(loginCredentials);

    let isUserValid= this.service.checkCredentials(loginCredentials);
    if(isUserValid)
    {
      this.router.navigate(['home']); 
      console.log("User Is Valid");
      
    }
    else{
      this.router.navigate(['home']);
      this.message = "User Name / Password is Invalid!";
    }
  }

}
