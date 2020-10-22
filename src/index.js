import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/results';

import { Provider } from 'react-redux';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//simple middleware which logs each action
const logger = store => {
    //this function will recieve the next argument eg pass to reducer
    return next => {
        //this function return a function will recieve an action you dispatch
        return action => {
            console.log('[Middleware] Dispatching', action);
            //the next method will allow action to continue to reducer method.
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(logger));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
