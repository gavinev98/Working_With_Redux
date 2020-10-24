
//action types.
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';


//action types + action creators.

//creating an action for synchronous code
export const increment = () => {
    return {
        //return the action
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        //return the action
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        //return the action
        type: ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        //return the action
        type: SUBTRACT,
        val: value
    }
};


//synchronous action creator.
export const saveResult = ( res ) => {
        return {
            //return the action
            type: STORE_RESULT,
            result: res
        };
}


//asynchronous action creator.
export const store_result = (res) => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000)
    }

};

export const remove_result = (value) => {
    return {
        //return the action
        type: REMOVE_RESULT,
        resID: value
    }
};
