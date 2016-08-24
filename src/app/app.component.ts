import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component } from '@angular/core';
import { provideStore, Store } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor, StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import reducers from './reducers';
import { CarState } from './reducers';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { CarActions } from './actions/car.action';
import { CarEffects } from './effects';
import { runEffects } from '@ngrx/effects';
import 'bootstrap/dist/css/bootstrap.min.css';



@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES, StoreLogMonitorComponent],
  providers: [provideStore(reducers),instrumentStore({monitor:useLogMonitor({visible:false,position:"bottom"})}),runEffects([CarEffects]), HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, CarActions],
  styles: [require('./components/get/get.component.css')],
  template: require('./app.component.html')
})
export class AppComponent {
    constructor(private store: Store<CarState>, private actions: CarActions){
 //this.store.dispatch(this.actions.carAdded({make:"Toy",model:"Ridgeline"}));
    }
 }