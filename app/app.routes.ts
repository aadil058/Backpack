import { provideRouter, RouterConfig } from '@angular/router';
import { homeRoutes } from './homepage/home.routes';
import { PageNotFoundComponent } from './page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login.service';

export const routes: RouterConfig = [
  ...homeRoutes,
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard,    // AuthGuard and LoginServices needs to be injected for routing guard to be functional 
  LoginService
]; 