import { provideRouter, RouterConfig } from '@angular/router';
import { homeRoutes } from './homepage/home.routes';
import { PageNotFoundComponent } from './page-not-found.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: RouterConfig = [
  ...homeRoutes,
  { path: 'courses', component: CoursesComponent},
  { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];