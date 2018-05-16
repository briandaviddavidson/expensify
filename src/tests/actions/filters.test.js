import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from '../../actions/filters';
import moment from 'moment';

test('Set start date', () => {
  const action = SET_START_DATE(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('Set end date', () => {
  const action = SET_END_DATE(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('Set text filter with passed in values', () => {
  const action = SET_TEXT_FILTER('this is a test');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'this is a test'
  })
});

test('Set text filter with defaults', () => {
  const action = SET_TEXT_FILTER();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('Sort by date', () => {
  const action = SORT_BY_DATE();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  })
});

test('Sort by amount', () => {
  const action = SORT_BY_AMOUNT();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  })
});
