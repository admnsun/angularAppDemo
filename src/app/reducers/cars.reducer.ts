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
        case CarActions.CAR_ADDED:
            return {
                ids: [action.payload.id, ...state.ids],
                entities: Object.assign({}, state.entities, { [action.payload.id]: action.payload })
            };
        default:
            return state;
    }
};
    
