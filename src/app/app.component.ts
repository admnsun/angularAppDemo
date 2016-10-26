import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor, StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { Router, Event, NavigationEnd } from '@angular/router';
//import reducers from './reducers';
import { CarState } from './reducers';
import { routing } from './app.routes';
import { CarActions } from './actions/car.action';
import { CarEffects } from './effects';
import { runEffects } from '@ngrx/effects';
import 'bootstrap/dist/css/bootstrap.min.css';



@Component({
  selector: 'my-app',
  //directives: [StoreLogMonitorComponent],
  //providers: [provideStore(reducers),instrumentStore({monitor:useLogMonitor({visible:false,position:"bottom"})}),runEffects([CarEffects]), routing, CarActions],
  styles: [require('./components/get/get.component.css')],
  template: require('./app.component.html')
})
export class AppComponent {
    constructor(private store: Store<CarState>, private actions: CarActions, public router:Router ){
      this.router.events.subscribe(
        (event:Event)=>{if (event instanceof NavigationEnd){window['optimizely']||[]; window['optimizely'].push({type:'page',pageName:event.urlAfterRedirects.replace('/','')});}}
        );      
 //this.store.dispatch(this.actions.carAdded({make:"Toy",model:"Ridgeline"}));
    }
 }