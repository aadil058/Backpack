import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CoursesService {
    
    constructor(private http: Http) {}

    getAllCoureses() {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        return this.http.get('http://localhost:1667/api/courses/all', { headers: headers }).map(data => data.json());
    }

    addCourse(courseId) {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        return this.http.post('http://localhost:1667/api/courses/add', { courseId: courseId }, { headers: headers })
                        .map(data => data.json());
    }

    getMyCourses() {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        return this.http.get('http://localhost:1667/api/courses/enrolled', { headers: headers }).map(data => data.json());
    }

    getMyID() {
        var token = localStorage.getItem('token');
        var payload = JSON.parse(window.atob(token.split('.')[1]));
        return payload.id;
    }

    leaveCourse(courseId) {
        
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        var query = new URLSearchParams();
        query.set('courseId', courseId);

        return this.http.delete('http://localhost:1667/api/courses/leave', { headers : headers, search: query })
                        .map(res => res.json());
    }
}