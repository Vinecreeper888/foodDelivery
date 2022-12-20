const redux = require('redux'); 

//reducer function
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter+1
        };
    }

    if(action.type === "decrement") {
        return {
            counter: state.counter-1
        };
    }

    return state;
}; 

const store = redux.createStore(counterReducer);
//console.log(store.getState());
 
const counterSubscriber = () => {
    const latestState = store.getState(); //latest snapshot after updation.
    console.log(latestState);
};

store.subscribe(counterSubscriber); 
store.dispatch({type: 'increment'}); 
store.dispatch({type: 'decrement'});

//WHAT IS HAPPENING?
//the first output of counter:1 is coming from the subscription 
//done on the counterSubscriber where the action is of type increment
//after that is executed, another dispatch of type of decrement is
//executed. The state changes so the subscription is triggered again
//and the second output of counter:0 is displayed in the console.
