

const initialState = {

    counter: 0,
    results: []

}


const reducer = (state = initialState, action) => {

    switch(action.type){

        case 'INCREMENT':
        //cloning the state
        const cloneState = Object.assign({}, state);
        //updting cloned state
        cloneState.counter = state.counter + 1;
        //return cloned state
        return cloneState;
        break;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        break;
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        break;
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        break;    
        case 'STORE_RESULT':
            return {
               ...state,
               results: state.results.concat({id: new Date(), value: state.counter})
            } 
    }

    return state;
}

export default reducer;