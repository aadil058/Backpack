// auth-guard can be applied to any restricted route
// and after successful login user will be redirected to that route

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    // ActivatedRouteSnapshot contains the future route that will be activated
    // RouterStateSnapshot contains future RouterState of our application
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.loginService.isLoggedIn())   
            return true;

        // store attempted url for redirecting on successful login
        this.loginService.redirectUrl = state.url;

        // navigation extras can be passed here
        this.router.navigate(['/home']);
        return false;
    }
}