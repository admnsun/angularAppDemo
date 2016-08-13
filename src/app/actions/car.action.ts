import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Car } from '../models';

 

@Injectable()

export class CarActions {

  static ADD_CAR = '[Cars] Add Car';

  addCar(car: any): Action {

    return {

      type: carActions.ADD_CAR,

      payload: car

    };

  }

 

 

  static CAR_ADDED = '[Cars] Car Added';

  carAdded(car: Car): Action {

    return {

      type: CarActions.CAR_ADDED,

      payload: car


    };

  }

}

