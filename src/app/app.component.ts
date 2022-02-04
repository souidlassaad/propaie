import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import { AuthService } from './demo/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    menuMode = 'sidebar';

    darkMode = 'light';

    topbarTheme = 'light';

    menuTheme = 'light';

    inputStyle = 'outlined';

    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig,public authService: AuthService,
      private router: Router) { }

    ngOnInit() {

        this.primengConfig.ripple = true;
      {
          let isloggedin: string;
          let loggedUser:string;
          isloggedin = localStorage.getItem('isloggedIn');
          loggedUser = localStorage.getItem('loggedUser');
          if (isloggedin!="true" || !loggedUser)
              this.router.navigate(['']);
          else
           this.authService.setLoggedUserFromLocalStorage(loggedUser);
        }
      }
    }

