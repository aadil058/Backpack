import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignupService {
    constructor(private http: Http) {}

    signup(username, password) {
        return this.http.post('http://localhost:1667/api/users/signup', { username: username, password: password })
                 .map(this.successHandler)
                 .catch(this.failureHandler);
    }

    successHandler(res) {
        res = res.json();
        localStorage.setItem('token', res.token);
        return res;
    }

    failureHandler(error) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}