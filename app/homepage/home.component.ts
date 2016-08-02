import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
    templateUrl : '/app/homepage/home.component.html',
    directives: [LoginComponent, SignupComponent]
})
export class HomeComponent {
    state: string = "login";

    changeState(state) {
        this.state = state;
    }
}