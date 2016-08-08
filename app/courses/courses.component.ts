import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
    templateUrl: '/app/courses/courses.component.html',
    providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

    courses = [];
    mycourses = [];

    loadingAllCourses = true;
    loadingMyCourses = true;

    allCoursesMessage;
    myCoursesMessage;

    userId;

    constructor(private loginService: LoginService, private router: Router, private coursesService: CoursesService) {
        this.userId = this.coursesService.getMyID();
    }

    ngOnInit() {
        this.coursesService.getAllCoureses()
                    .subscribe(data => { this.courses = data.courses;
                                         this.allCoursesMessage = undefined }, null, 
                                        () => { this.loadingAllCourses = false;
                                                if(this.courses.length === 0)
                                                    this.allCoursesMessage = "Sorry, no course to display"; }
                              );

        this.coursesService.getMyCourses()
                            .subscribe(data => { this.mycourses = data }, null,
                                                 () => { this.loadingMyCourses = false;
                                                         if(this.mycourses.length === 0)
                                                            this.myCoursesMessage = "You didn't joined any course" });
    }

    addCourse(course) {
        this.coursesService.addCourse(course._id).subscribe(data => {
             this.mycourses = data.slice();
             course.users.push(this.coursesService.getMyID());  // if error adding course revert back to original configuration
             this.courses = this.courses.slice();
       }, null, () => this.myCoursesMessage = undefined);
    }

    logOut() {
        this.loginService.logout();
        this.router.navigate(['/home']);
    }
}