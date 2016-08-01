import {Component} from '@angular/core';
import { HomeComponent } from './homepage/home.component';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'app',
  template : `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  precompile: [HomeComponent],
  directives: [ROUTER_DIRECTIVES] 
})
export class AppComponent {
}