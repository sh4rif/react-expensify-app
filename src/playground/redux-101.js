import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
  type: 'SET',
  count
});

const setReset = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = ( state = { count: 0 }, action ) => {

  switch (action.type)
  {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      if(action.count){
        return {
          count: action.count
        };
      }
      break;

    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }

};

const store = createStore(countReducer);

//Action - Nothing more than an Object, that gets sent to the store
// i.e Increment, decrement, reset

// console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 7}));
store.dispatch(incrementCount());

// store.dispatch({ type: 'RESET' });
store.dispatch(setReset());

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({ count: 102 }));
store.dispatch(setCount());