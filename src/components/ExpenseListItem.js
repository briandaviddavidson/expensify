import React from 'react';
import {connect} from 'react-redux';
import {REMOVE_EXPENSE} from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, desc, amount, createdAt}) => (
  <div>
    <h3>{desc}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(REMOVE_EXPENSE({id}))
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
