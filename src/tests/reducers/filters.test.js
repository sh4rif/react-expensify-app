import moment from "moment";
import filtersReducers from "../../reducers/filters";

const startDate = moment().startOf('month');
const endDate = moment().endOf('month');

const filters = {
  text: '',
  sortBy: 'date',
  startDate,
  endDate
};

test('should setup default filter values', () => {
  const state = filtersReducers(undefined, {type: '@@INIT'});
  expect(state).toEqual({ ...filters })
});

test('should set sortBy to amount', () => {
  const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
  // expect(state).toEqual({ ...filters, sortBy: 'amount' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filtersReducers(filters, {type: 'SORT_BY_DATE'});
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducers(undefined, {type: 'SET_TEXT_FILTER', text: 'something'});
  expect(state).toEqual({ ...filters, text: 'something' });
});

test('should set startDate filter', () => {
  const startDate = moment().add(3, 'days');
  const state = filtersReducers(undefined, {type: 'SET_START_DATE', startDate });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment().subtract(4, 'days');
  const state = filtersReducers(undefined, {type: 'SET_END_DATE', endDate});
  expect(state.endDate).toEqual(endDate);
});
