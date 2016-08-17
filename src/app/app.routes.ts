import { provideRouter, RouterConfig } from '@angular/router';
import { AddComponent } from './components/add';
import { GetComponent } from './components/get';

const routes: RouterConfig = [
{ path: '', redirectTo: 'add', pathMatch: 'full' },
{ path: 'add', component: AddComponent },
{ path: 'get', component: GetComponent}

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];