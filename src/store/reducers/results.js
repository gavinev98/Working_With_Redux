import * as actionTypes from '../actions/actions';

const initialState = {

    results: []

}


const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.STORE_RESULT: 
            return {
               ...state,
               results: state.results.concat({id: new Date(), value: action.result})
            } 
        break;
        case actionTypes.REMOVE_RESULT:
            //accquire index
            //create copy of the array. filter creates copy and executes function on each element in array.
            const updatedArray = state.results.filter(result => result.id !== action.resID);
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}

export default reducer;