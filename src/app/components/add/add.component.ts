import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models';
import { Store } from '@ngrx/store';
import { CarActions } from '../../actions';
import reducers from '../../reducers';
import { CarState } from '../../reducers';

@Component({
    moduleId: module.id.toString(),
    selector: 'add',
    template: require('./add.component.html'),
    styles: [require('./add.component.css')]
})

export class AddComponent implements OnInit{
    constructor(private store: Store<CarState>, private actions: CarActions){ 
        
    }
    car: Car = {make: ''};
    ngOnInit(){}
    add(){
        console.log("Adding", this.car);
       this.store.dispatch(this.actions.carAdded(this.car));
    }
}