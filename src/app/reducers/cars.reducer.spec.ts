import {
    addProviders,
    inject
} from '@angular/core/testing';
import { Action } from '@ngrx/store';
import  carsReducer from './cars.reducer';
import { Car } from '../models/car';
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
        
       // let carState: fromCars.CarState = {
      //      ids: ['1'],
       //     entities: { [car] }
       // };
         
         const state = carsReducer(car,{type:null,payload:null});
        expect(state).not.toBe(null);
      //  expect(true).toBe(true);
    });
});