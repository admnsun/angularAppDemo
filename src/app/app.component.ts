import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component } from '@angular/core';
import { provideStore } from '@ngrx/store';
import reducers from './reducers'
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';


@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [provideStore([reducers]), HTTP_PROVIDERS, APP_ROUTER_PROVIDERS],
 // providers: [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS],
  template: require('./app.component.html')
})
export class AppComponent {
    constructor(){

    }
 }