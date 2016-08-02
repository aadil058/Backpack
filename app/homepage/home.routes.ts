import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes : RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];