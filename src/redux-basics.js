const redux = require('redux');
const createStore = redux.createStore;



const initialState = {
    counter : 0
}


//reducer takes current state and action and returns updated state.
const rootReducer = (state = initialState, action) => {
    //we retrieve the actions as a second argument.


    return state;

};

//store needs to be initialized with a reducer.
const store = createStore(rootReducer);




//action / dispatching action each action must have a type.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

//subscription 