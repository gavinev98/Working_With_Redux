
import * as actionTypes from './actionTypes';

//synchronous action creator.
export const saveResult = ( res ) => {
    const updatedResult = res * 2;
    return {
        //return the action
        type: actionTypes.STORE_RESULT,
        result: updatedResult
    };
}


//asynchronous action creator.
export const store_result = (res) => {
return (dispatch, getState) => {
    setTimeout(() => {
        const olcCounter = getState().ctr.counter;
        console.log(olcCounter);
        dispatch(saveResult(res))
    }, 2000)
}

};

export const remove_result = (value) => {
return {
    //return the action
    type: actionTypes.REMOVE_RESULT,
    resID: value
}
};