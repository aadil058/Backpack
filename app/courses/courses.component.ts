import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: '/app/courses/courses.component.html'
})
export class CoursesComponent {

    constructor(private loginService: LoginService, private router: Router) {}

    logOut() {
        this.loginService.logout();
        this.router.navigate(['/home']);
    }
}