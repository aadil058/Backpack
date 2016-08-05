import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl : '/app/login/login.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [LoginService]
})
export class LoginComponent {
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
                        .subscribe( res => this.router.navigate(['/courses']), 
                                    error => { 
                                       this.loginError = error; 
                                       this.form.setErrors({ loginError: true }); 
                                    }
                                   );
    }
}