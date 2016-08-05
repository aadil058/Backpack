import { Component } from '@angular/core';
import { HomeComponent } from './homepage/home.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app',
  template : `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  precompile: [HomeComponent, PageNotFoundComponent, CoursesComponent],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}