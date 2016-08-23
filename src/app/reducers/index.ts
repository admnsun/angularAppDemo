import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import '@ngrx/core/add/operator/select';
import  carsReducer, * as fromCars from './cars.reducer';

export interface CarState{
    cars:fromCars.CarState;
}

export default compose(combineReducers)({
    cars:carsReducer
   // CarState
});

export function getCarState(){
    return (state$: Observable<CarState>) => 
        state$
    .select(s => s.cars);
    
}

export function getCars(carIds:string[]){
    return compose(fromCars.getCars(carIds), getCarState());
}

export function getCarIds() {
    return compose(fromCars.getCarIds(), getCarState());
}

export function getCarsCollection() {
    return (state$: Observable<CarState>) => state$
    .let(getCarIds())
    .switchMap(carIds => state$.let(getCars(carIds)));
}

