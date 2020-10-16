import * as actionTypes from './actions';

const initialState = {

    counter: 0,
    results: []

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
            return {
                ...state,
                counter: state.counter - 1
            }
        break;
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        break;
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        break;    
        case actionTypes.STORE_RESULT:
            return {
               ...state,
               results: state.results.concat({id: new Date(), value: state.counter})
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