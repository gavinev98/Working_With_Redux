const redux = require('redux');
const createStore = redux.createStore;



const initialState = {
    counter : 0
}


//reducer takes current state and action and returns updated state.
const rootReducer = (state = initialState, action) => {
    
    return state;

};

//store needs to be initialized with a reducer.
const store = createStore(rootReducer);
console.log(store.getState());



//action / dispatching action


//subscription 