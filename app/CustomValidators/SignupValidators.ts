import { FormControl } from '@angular/forms';
import { Http, URLSearchParams } from '@angular/http';
import { Injector } from '@angular/core';
import 'rxjs/add/operator/toPromise';

export class SignupValidators {
    static usernameShouldBeUnique(http: Http) {
        return (formControl: FormControl) => {

            let params = new URLSearchParams();
            params.set('username', formControl.value);

            http.get('http://localhost:1667/users/signup/namecheck', { search: params })
                                            .subscribe(data => console.log(data),
                                                       error => console.log(error));
        }
    }

    static CannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0 ) 
            return { cannotContainSpace: true };
        return null;
    }
}