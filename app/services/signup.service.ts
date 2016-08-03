import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignupService {
    constructor(private http: Http) {
    }
}