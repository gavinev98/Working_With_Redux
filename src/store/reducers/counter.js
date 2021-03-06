import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility.js';

const initialState = {

    counter: 0,

}


const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.INCREMENT:
        //cloning the state
        const cloneState = Object.assign({}, state);
        //updting cloned state
        cloneState.counter = state.counter + 1;
        //return cloned state
        return cloneState;
        break;
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        break;
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val});
        break;
        case actionTypes.SUBTRACT:
           return updateObject(state, {counter: state.counter + action.val});
        break;    
    }

    return state;
}

export default reducer;