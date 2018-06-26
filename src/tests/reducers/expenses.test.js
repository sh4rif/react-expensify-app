import moment from "moment";
import expensesReducers from "../../reducers/expenses";
import expenses from '../fixtures/expenses';


test('should add default state', () => {
  const state = expensesReducers(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Testing',
    amount: 68950,
    note: '',
    createdAt: 20000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit an expense if found', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toEqual(amount);
});

test('should not edit an expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-22',
    updates: {
      note: ''
    }
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});