import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment, decrement, add, subtract, store_result, remove_result } from '../../store/store';


 class Counter extends Component {
    state = {
       counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.resultsArray.map(storedResult => (
                        <li key={storedResult.id} id={storedResult.id} onClick={() => this.props.onRemoveResult(storedResult.id)}>{storedResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


//make sure to create after class and before the export.
//setting action and retrieving state through the subscription model.
//the state defined below will reach out to the redux state not internal state.
const mapStateToProps = state  => {
    return {
        //a map of prop names and slices of the state.
        //retriving some state
        ctr: state.ctr.counter,
        resultsArray: state.res.results

    };
};


//passing actions to dispatch
const mapDispatchToProps = dispatch => {
    return {
            //we can define some actions/props names which hold reference to function
            onIncrementCounter: () => dispatch(increment()),
            onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT }),
            onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
            onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
            onStoreResult: (val) => dispatch({type: actionTypes.STORE_RESULT, result: val}),
            onRemoveResult: (id) => dispatch({type: actionTypes.REMOVE_RESULT, resID: id})
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Counter);