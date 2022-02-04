import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './demo/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GardGuard implements CanActivate {
  constructor (private authService: AuthService,
    private router : Router) {} 
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot):  boolean  {

if (this.authService.isAdmin())

return true;
else
{


 alert("you can't access");
}
}

}

