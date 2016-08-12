import { ActionReducer, Action } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Car } from '../models';

export interface CarState {
    ids: string[];
    entities: { [id: string]: Car };
}
export default function reducer(state, action: Action){
    switch (action.type) {

        default:
            return state;
    }
};
    
