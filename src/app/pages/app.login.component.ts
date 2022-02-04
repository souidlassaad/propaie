import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';


import { User } from 'src/app/demo/domain/user';
import { AuthService } from 'src/app/demo/service/auth.service';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styles: [
  ]
})
export class AppLoginComponent implements OnInit {
 submitted = false;
 
  user = new User();
 
  constructor(private authService : AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  
  onLoggedin()
  {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    console.log("valid user "+isValidUser);
    if (isValidUser)
    {
      console.log("isadmin "+this.authService.isAdmin());
      this.router.navigate(['demo/view/dashboard']);     
    }
      else
      alert("email ou mot de passe invalid");
}


}
