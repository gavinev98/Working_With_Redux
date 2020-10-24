
import * as actionTypes from './actionTypes';


//creating an action for synchronous code
export const increment = () => {
    return {
        //return the action
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        //return the action
        type: actionTypes.DECREMENT
    }
};

export const add = (value) => {
    return {
        //return the action
        type: actionTypes.ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        //return the action
        type: actionTypes.SUBTRACT,
        val: value
    }
};