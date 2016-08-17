import {
    addProviders,
    inject
} from '@angular/core/testing';
import { Action } from '@ngrx/store';
import  carsReducer from './cars.reducer';
import { Car } from '../models/car';
import { CarActions } from '../actions';
describe('carsReducer',() => {
    it('Should return application state',() => {
        let car:Car = {
            id: '1',
            make: 'Toyota',
            model: 'Rav4',
            year: 2016,
            type: 'SUV',
            rating: 3,
            price: 25000
        };
         
        let state = carsReducer(undefined,{type:null,payload:null});
        expect(state).not.toBe(null);
        state = carsReducer(undefined,{type:CarActions.CAR_ADDED,payload:car});
        expect(state.ids[0]).toBe("1");
        expect(state.entities[1].id).toBe("1");
    });
    it('Should return Car Entities', () => {
        let car:Car = {
            id: '1',
            make: 'Toyota',
            model: 'Rav4',
            year: 2016,
            type: 'SUV',
            rating: 3,
            price: 25000
        };
        let state = carsReducer(undefined,{type:CarActions.CAR_ADDED,payload:car});
        let entities = carsReducer;
        
    });
});