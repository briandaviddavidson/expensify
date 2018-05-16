import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
  id: '1',
  desc: 'rent',
  note: '',
  amount: 200000,
  createdAt: 0
},{
  id: '2',
  desc: 'Gum',
  note: '',
  amount: 195,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  desc: 'credit card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]

test('filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
})

test('filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
})

test('filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
})

test('sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})

test('sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
})
