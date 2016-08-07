import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
    templateUrl: '/app/courses/courses.component.html',
    providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

    courses;
    loadingAllCourses = true;

    constructor(private loginService: LoginService, private router: Router, private coursesService: CoursesService) {}

    ngOnInit() {
        this.coursesService.getAllCoureses()
                            .subscribe(data => { this.courses = data.courses }, null,
                                       () => { this.loadingAllCourses = false });
    }

    logOut() {
        this.loginService.logout();
        this.router.navigate(['/home']);
    }
}