import { Component, Output } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { SignupValidators } from '../CustomValidators/SignupValidators';

@Component({
    selector: 'signup',
    templateUrl : '/app/signup/signup.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES] 
})
export class SignupComponent {

    form: FormGroup;
    username: FormControl;
    password: FormControl;

    constructor(private fb: FormBuilder) {
        this.username = new FormControl("", Validators.compose([Validators.required, SignupValidators.CannotContainSpace]));
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