import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisiableExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visiableExpenses = getVisiableExpenses(state.expenses, state.filters)
//   console.log(visiableExpenses);
// });

// store.dispatch(addExpense({ description: 'Water bill', amount: 5000, createdAt: 2500 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 3500, createdAt: 5000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109522, createdAt: 100 }));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));