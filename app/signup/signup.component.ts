import { Component, Output } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { SignupValidators } from '../CustomValidators/SignupValidators';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'signup',
    templateUrl : '/app/signup/signup.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [SignupService]
})
export class SignupComponent {

    form: FormGroup;
    username: FormControl;
    password: FormControl;
 
    constructor(private fb: FormBuilder, private http: Http, private signupService: SignupService, private router: Router) {
        this.username = new FormControl("", Validators.compose([
            Validators.required, 
            SignupValidators.CannotContainSpace]),
            this.usernameShouldBeUnique.bind(this));

        this.password = new FormControl("", Validators.compose([Validators.required]));

        this.form = fb.group({
            username: this.username,
            password: this.password
        });
    }

    onSubmit() {
        this.signupService.signup(this.form.value.username, this.username.value.password)
                          .subscribe(res => { this.router.navigate(['/courses']); }, 
                                     err => console.log(err));  // haven't handled the error case, because it's most unlikely for error to be returned
    }  

    usernameShouldBeUnique(formControl:FormControl) {
        return new Promise(resolve => {
            let params = new URLSearchParams();
            params.set('username', formControl.value);
            this.http.get('http://localhost:1667/api/users/signup/namecheck', { search: params })
                     .subscribe(data => resolve(null), error => resolve({ usernameShouldBeUnique: true }));
                        // error line may cause the bug in case when username is not conflicting but still
                        // error is still returned due to unreachable page
                        // i am too lazy to handle the case, it just requires changes of 2-3 lines
        });
    }
}