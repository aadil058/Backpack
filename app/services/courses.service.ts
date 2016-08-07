import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CoursesService {
    constructor(private http: Http) {}

    getAllCoureses() {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        return this.http.get('http://localhost:1667/api/courses/all', { headers: headers })
                 .map(data => data.json());
    }
}