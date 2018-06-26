import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// ADD_EXPENSE
const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];

    case 'REMOVE_EXPENSE':
      return state.filter( ({ id }) => id !== action.id );

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;

      });

    default:
      return state;
  }
};

//filters reducers
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};

// timestamp (MILLISECONDS)
// January 1st 1970; (UNIX epoch)
// 33400, 10, -203 are all valid timestamps

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    // if( expense.)
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch   = typeof endDate   !== 'number' || expense.createdAt <= endDate ;
    const textMatch      = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy.toLowerCase() === 'date'.toLowerCase()){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy.toLowerCase() === 'amount'.toLowerCase()){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(store.getState());
});

const rent = store.dispatch(addExpense({ description: 'Rent', amount: 85000, createdAt: -21000 }));
const coffee = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
const tea = store.dispatch(addExpense({ description: 'Tea', amount: 350, createdAt: -21100 }));

// store.dispatch(removeExpense({ id: rent.expense.id }));

// store.dispatch(editExpense(coffee.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('co'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));
// store.dispatch(setEndDate());



// const demoState = {
//   expenses: [{
//     id: 'asldfiasodf',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'date/amount', //  sort by date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// }

// const user = {
//   name: 'Jen',
//   age: 24
// };

// console.log({
//   ...user,
//   location: 'Lahore',
//   age: 27
// });

// var startDate = 299;
// var createdAt = 300;
// var startDateMatch = typeof startDate !== 'number' || createdAt >= startDate;
// console.log(startDateMatch);

var unix_timestamp = 9999999999  //1299446702
var date = new Date(unix_timestamp*1000);
console.log('date : ' + date);
// Hours part from the timestamp
var hours = date.getHours();
console.log('Hours : ' + hours);
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
console.log('minutes : ' + minutes);

// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();
console.log('seconds : ' + seconds);
// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
console.log('formattedTime : ' + formattedTime);

const str = 'Hello World!'.toLowerCase();
const str2 = 'ell';
const match = str.includes(str2);
console.log(match);
// const textExpense = expense.description