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