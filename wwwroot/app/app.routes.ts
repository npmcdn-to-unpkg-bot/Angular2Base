import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { DetailComponent } from './components/detail.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'detail', component: DetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];