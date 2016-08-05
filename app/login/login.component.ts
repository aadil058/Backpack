import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl : '/app/login/login.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginComponent {

    @Output() success = new EventEmitter();

    form: FormGroup;
    username: FormControl;
    password: FormControl;
    loginError: string;

    constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {

        this.username = new FormControl("", Validators.required);
        this.password = new FormControl("", Validators.required);

        this.form = fb.group({
            username: this.username,
            password: this.password
        });
    }

    onSubmit() {
        this.loginService.login(this.form.value.username, this.form.value.password)
                        .subscribe(res => { 
                                     var url: string = this.loginService.redirectUrl || 'courses';
                                     this.loginService.redirectUrl = undefined;
                                     this.success.emit(url);
                                   }, 
                                   error => { 
                                     this.loginError = error; 
                                     this.form.setErrors({ loginError: true }); 
                                   });
    }
}