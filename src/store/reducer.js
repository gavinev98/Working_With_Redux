

const initialState = {

    counter: 0

}


const reducer = (state = initialState, action) => {

    //check if action type is INCREMENT.
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }

    //check if action type is DECREMENT.
    if(action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }

    //check if action type is ADDITION
    if(action.type === 'ADD') {
        return {
            counter: state.counter + action.val
        }
    }

    //check if action type is SUBTRACT
    if(action.type === 'SUBTRACT') {
        return {
            counter: state.counter - action.val
        }
    }



    return state;
}

export default reducer;