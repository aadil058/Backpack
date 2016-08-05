import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    login(username, password) {
        return this.http.post('http://localhost:1667/api/users/login', { username: username, password: password })
                .map(this.successHandler)
                .catch(this.failureHandler);
    }

    successHandler(res) {
        res = res.json();
        localStorage.setItem('token', res.token);
        return res;
    }

    failureHandler(error) {
        console.log(error);
        let errMsg = (error._body && typeof(error._body) === "string") ? error._body : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    isLoggedIn() {

    }

    getToken() {
        return localStorage.getItem('token');
    }
}