import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Injector } from '@angular/core';
import 'rxjs/add/operator/toPromise';

export class SignupValidators {
    // static usernameShouldBeUnique(http: Http) {}

    static CannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0 ) 
            return { cannotContainSpace: true };
        return null;
    }
}