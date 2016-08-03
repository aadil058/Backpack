import { Component, Output } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { SignupValidators } from '../CustomValidators/SignupValidators';
import { Http } from '@angular/http';

@Component({
    selector: 'signup',
    templateUrl : '/app/signup/signup.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES] 
})
export class SignupComponent {

    form: FormGroup;
    username: FormControl;
    password: FormControl;

    constructor(private fb: FormBuilder, private http: Http) {
        this.username = new FormControl("", Validators.compose([
            Validators.required, 
            SignupValidators.CannotContainSpace]),
            SignupValidators.usernameShouldBeUnique(http));
        this.password = new FormControl("", Validators.compose([Validators.required]));

        this.form = fb.group({
            username: this.username,
            password: this.password
        });
    }

    onSubmit() {
        console.log(this.form);
    }
}