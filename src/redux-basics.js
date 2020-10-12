const redux = require('redux');
const createStore = redux.createStore;



const initialState = {
    counter : 0
}


//reducer takes current state and action and returns updated state.
const rootReducer = (state = initialState, action) => {
    //we retrieve the actions as a second argument.
    if(action.type == 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }


    if(action.type == 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;

};

//store needs to be initialized with a reducer.
const store = createStore(rootReducer);


//subscription executes when the state has been changed.
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//action / dispatching action each action must have a type.
store.dispatch({type: 'INC_COUNTER'});
//you can also pass a payload like below.
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

