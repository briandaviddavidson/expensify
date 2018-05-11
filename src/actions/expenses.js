import uuid from 'uuid';
// add expense
export const ADD_EXPENSE = ({desc = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    desc,
    note,
    amount,
    createdAt
  }
})

// remove expense
export const REMOVE_EXPENSE = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// edit expense
export const EDIT_EXPENSE = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
