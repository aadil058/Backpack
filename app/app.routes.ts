import { provideRouter, RouterConfig } from '@angular/router';
import { homeRoutes } from './homepage/home.routes';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: RouterConfig = [
  ...homeRoutes,
  { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];