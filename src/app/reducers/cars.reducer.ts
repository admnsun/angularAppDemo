import { ActionReducer, Action } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Car } from '../models';
import { CarActions } from '../actions';

export interface CarState {
    ids: string[];
    entities: { [id: string]: Car };
}
let initialState: CarState ={
    ids:[],
    entities:null
};
export default function reducer(state: CarState = initialState, action: Action): CarState {
    switch (action.type) {
        case CarActions.ADD_CAR:      
            return {
                ids: [action.payload.id, ...state.ids],
                entities: Object.assign({}, state.entities, { [action.payload.id]: action.payload })
            };
        case CarActions.CAR_ADDED:
            return state;
        default:
            return state;
    }
};
    
export function getCarEntities() {
    return (state$: Observable<CarState>) => state$
    .select(s => s.entities);
}

export function getCars(carIds: string[]) {
    return (state$: Observable<CarState>) => state$
    .let(getCarEntities())
    .map(entities => carIds.map(id => entities[id]));
}

export function getCarIds() {
    return (state$: Observable<CarState>) => state$
    .select(s => s.ids);
}

export function getCarsCollection() {
    return (state$: Observable<CarState>) => state$
    .let(getCarIds())
    .switchMap(carIds => state$.let(getCars(carIds)));
}