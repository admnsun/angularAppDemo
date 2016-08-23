import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Car } from '../models';

@Injectable()
export class CarActions {
  static ADD_CAR = '[Cars] Add Car';
  private id: number = 1;
  addCar(car: any): Action {
 //   let newCar = Object.assign({}, car, { id: (this.id++).toString()});
    return {
      type: CarActions.ADD_CAR,
      payload: car
    };
  }

  static CAR_ADDED = '[Cars] Car Added';
  carAdded(car: Car): Action {
  let newCar = Object.assign({}, car, { id: (this.id++).toString()});
    return {
      type: CarActions.CAR_ADDED,
      payload: newCar
    };
  }
}

