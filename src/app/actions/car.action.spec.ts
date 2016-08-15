import {
    addProviders,
    inject
} from '@angular/core/testing';
import { Car } from '../models/car';
import { CarActions } from './car.action';

describe('CarActions',() => {
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
        let carActions = new CarActions();
        let state = carActions.addCar(car);
        expect(state.type).toBe("[Cars] Add Car");
        expect(state.payload.id).toBe("1");
        state = carActions.carAdded(car);
        expect(state.type).toBe("[Cars] Car Added");
        expect(state.payload.id).toBe("1");
    });
});