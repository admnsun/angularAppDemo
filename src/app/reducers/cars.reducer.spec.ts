import {
    TestBed,
    inject,
    async
} from '@angular/core/testing';
import { Action, Store, provideStore } from '@ngrx/store';
import  carsReducer, * as fromCars from './cars.reducer';

import { CarState } from '../reducers';
import { Car } from '../models/car';
import { CarActions } from '../actions';
import { getCarsCollection } from '../reducers';
import { getCarIds } from '../reducers';
import { getCars } from '../reducers';
import { Observable } from 'rxjs/Observable';
describe('carsReducer',() => {
    beforeEach(()=>
    TestBed.configureTestingModule([{provide: provideStore([fromCars]),Store}]));
    it('Should return application state',
    async(inject([Store],(store:Store<CarState>) => {
        let car:Car = {
            make: 'Toyota',
            model: 'Rav4',
            year: 2016,
            type: 'SUV',
            rating: 3,
            price: 25000
        };
         
        let state: CarState;
            
        
      //  expect(fromCars.reducer(state,{type:CarActions.ADD_CAR,payload:car}).not.toBe(null));
        this.store.dispatch(undefined,{type:CarActions.CAR_ADDED,payload:car});
        let ids:string[] = this.store.let(getCarIds());
        expect(ids[0]).toBe("1");
        let cars: Observable<Car[]> = this.store.let(getCars(ids));
        expect(cars[1].id).toBe("1");
    })));
    it('Should return Car Entities', () => {
        let car:Car = {
            make: 'Toyota',
            model: 'Rav4',
            year: 2016,
            type: 'SUV',
            rating: 3,
            price: 25000
        };
       // let state = carsReducer(undefined,{type:CarActions.ADD_CAR,payload:car});
      //  let entities = carsR;
        
    });
});