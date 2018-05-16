import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../../actions/expenses';

test('Add an expense with passed in values', () => {
  const expenseData = {
    desc: 'Rent',
    note: 'This is my rent',
    amount: 200000,
    createdAt: 1000
  }

  const action = ADD_EXPENSE(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Add an expense with default values', () => {
  const action = ADD_EXPENSE();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      desc: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

test('Edit an expense', () => {
  const action = EDIT_EXPENSE('123abc', {'note': 'My new note'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123abc',
    updates: {
      note: 'My new note'
    }
  });
});

test('Remove an expense', () => {
  const action = REMOVE_EXPENSE({id: '123abc'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});
