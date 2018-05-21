import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('default is empty array', function () {
  const result = expensesReducer(undefined, {type: '@@INIT'});

  expect(result).toEqual([])
})

test('remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const result = expensesReducer(expenses, action);

  expect(result).toEqual([expenses[0], expenses[2]]);
})

test('shouldn\'t remove expense if not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }

  const result = expensesReducer(expenses, action);

  expect(result).toEqual(expenses);
})

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      desc: '',
      note: '',
      amount: 0,
      createdAt: 1000
    }
  };

  const result = expensesReducer(expenses, action);

  expect(result).toEqual([expenses[0], expenses[1], expenses[2], action.expense]);
})

test('should edit expense', () => {
  const amount = 19500
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }

  const result = expensesReducer(expenses, action);

  expect(result[1].amount).toBe(amount);
})

test('shouldn\'t edit expense if not found ', () => {
  const amount = 19500
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }

  const result = expensesReducer(expenses, action);

  expect(result).toEqual(expenses);
})
