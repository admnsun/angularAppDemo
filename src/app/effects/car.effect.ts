import { Injectable } from '@angular/core';
import { Car } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Action } from '@ngrx/store';
import { CarActions } from '../actions';
import { Effect, StateUpdates, toPayload} from '@ngrx/effects';
import reducers from '../reducers';
import { CarState } from '../reducers';

@Injectable()
export class CarEffects {
    constructor(private update$: StateUpdates<CarState>, private action: CarActions){}
    private id: number = 1;

    @Effect() addingCar$ = this.update$
    .whenAction(CarActions.ADD_CAR)
    .map<Car>(toPayload)
    .map(car => Object.assign({}, car, { id: (this.id++).toString()}))
    .map(b => this.action.carAdded(b));
}