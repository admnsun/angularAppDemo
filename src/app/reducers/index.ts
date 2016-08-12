import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import  carsReducer, * as fromCars from './cars.reducer';

export interface AppState {
cars: fromCars.CarState;
}
export default compose(combineReducers)({
    cars: carsReducer
});