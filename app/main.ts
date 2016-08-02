import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]);