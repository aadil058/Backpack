import { Component } from '@angular/core';
import { HomeComponent } from './homepage/home.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

@Component({
  selector: 'app',
  template : `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  precompile: [HomeComponent, PageNotFoundComponent],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}