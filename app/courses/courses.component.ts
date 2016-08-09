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
        this.coursesService.getAllCoureses().subscribe(data => this.getAllCoursesSuccessHandler(data), null,() => this.getAllCoursesCompletionHandler());
        this.coursesService.getMyCourses().subscribe(data => this.getMyCoursesSuccessHandler(data), null,() => this.getMyCoursesCompletionHandler());                                                  
    }

    getAllCoursesSuccessHandler(data) {
        this.courses = data.courses;
    }

    getAllCoursesCompletionHandler() {
        this.loadingAllCourses = false;
        if(this.courses.length === 0)
            this.allCoursesMessage = "Sorry, No Course to display";
    }

    getMyCoursesSuccessHandler(data) {
        this.mycourses = data;
    }

    getMyCoursesCompletionHandler() {
        this.loadingMyCourses = false;
        if(this.mycourses.length === 0)
            this.myCoursesMessage = "You didn't joined any course";
    }

    addCourse(course) {
        this.coursesService.addCourse(course._id).subscribe(data => {
             this.mycourses = data.slice();
             course.users.push(this.coursesService.getMyID());  // add userId this to current session course or either update all courses (costly)
             this.courses = this.courses.slice();
       }, null, () => this.myCoursesMessage = undefined);
    }

    leaveCourse(course) {
        this.coursesService.leaveCourse(course._id).subscribe(data => this.leaveCourseSuccessHandler(course, data));
    }

    leaveCourseSuccessHandler(course, data) {
        var index = this.mycourses.indexOf(course);
        this.mycourses = data;
        this.coursesService.getAllCoureses().subscribe(data => this.getAllCoursesSuccessHandler(data), null,() => this.getAllCoursesCompletionHandler()); 
    }

    logOut() {
        this.loginService.logout();
        this.router.navigate(['/home']);
    }
}