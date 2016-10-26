import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add';
import { GetComponent } from './components/get';

const routes: Routes = [
{ path: '', redirectTo: 'add', pathMatch: 'full' },
{ path: 'add', component: AddComponent },
{ path: 'get', component: GetComponent}

];

export const routing: any = RouterModule.forRoot(routes);