import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";


test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate end start date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate an action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate an action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate set text filter object with values', () => {
  const text = 'some value'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});