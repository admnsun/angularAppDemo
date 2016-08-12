import { ActionReducer, Action } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

export function reducer(state, action: Action){
    switch (action.type) {

        default:
            return state;
    }
};
    
