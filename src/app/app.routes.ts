import { provideRouter, RouterConfig } from '@angular/router';
import { TestComponent } from './components/test';

const routes: RouterConfig = [
{ path: '', redirectTo: 'test', pathMatch: 'full' },
{ path: 'test', component: TestComponent }

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];