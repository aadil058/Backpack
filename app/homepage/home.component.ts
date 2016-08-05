// I made event binding with signup and login component, and redirect to other routes from this homepage instead of 
// redirecting to other route from one of the  component of this page
//
// Other approach can be redirect users to other routes from signup and login component themselves

import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';

@Component({
    templateUrl : '/app/homepage/home.component.html',
    directives: [LoginComponent, SignupComponent]
})
export class HomeComponent {

    state: string = "login";

    constructor(private router: Router) {}

    changeState(state) {
        this.state = state;
    }

    onLoginSuccess(data) {
        var url = '/' + data;
        this.router.navigate([url]);
    }

    onSignupSuccess(data) {
        this.router.navigate(['/courses']);
    }
}