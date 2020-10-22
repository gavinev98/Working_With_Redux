

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';


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

export const add = () => {
    return {
        //return the action
        type: ADD
    }
};

export const subtract = () => {
    return {
        //return the action
        type: SUBTRACT
    }
};

export const store_result = () => {
    return {
        //return the action
        type: STORE_RESULT
    }
};

export const remove_result = () => {
    return {
        //return the action
        type: REMOVE_RESULT
    }
};
