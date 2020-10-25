import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility.js';

const initialState = {

    results: []

}

const deleteResult = (state, action) => {

    const updatedArray = state.results.filter(result => result.id !== action.resID);
    return updateObject(state, {results: updatedArray});  
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE_RESULT: 
        return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        break;
        case actionTypes.REMOVE_RESULT:
            //accquire index
            //create copy of the array. filter creates copy and executes function on each element in array.
            return deleteResult(state, action);    
    }
    return state;
}

export default reducer;