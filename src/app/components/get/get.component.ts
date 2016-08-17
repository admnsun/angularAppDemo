import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import reducers from '../../reducers';
import { CarState } from '../../reducers';
import { Car } from '../../models/car';
import { getCarsCollection } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'get',
    template: require('./get.component.html')
})
export class GetComponent implements OnInit {
    cars: Observable<Car[]>;

    constructor(private store: Store<CarState>){

    }
    ngOnInit() {
        this.cars = this.store.let(getCarsCollection());
    }
}