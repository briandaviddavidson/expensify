import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('set up default values for filters', () => {
  const result = filtersReducer(undefined, {type: '@@INIT'});

  expect(result).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('set sortBy to amount', () => {
  const result = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(result.sortBy).toBe('amount');
})

test('set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = {type: 'SORT_BY_DATE'};
  const result = filtersReducer(currentState, action);

  expect(result.sortBy).toBe('date');
})

test('set text filter', () => {
  const text = 'test';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const result = filtersReducer(undefined, action);

  expect(result.text).toBe(text);
})

test('set start date filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const result = filtersReducer(undefined, action);

  expect(result.startDate).toBe(startDate);
})

test('set end date filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const result = filtersReducer(undefined, action);

  expect(result.endDate).toBe(endDate);
})
