import { FormControl } from '@angular/forms';

export class SignupValidators {

    static CannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0 ) 
            return { cannotContainSpace: true };
        return null;
    }
}