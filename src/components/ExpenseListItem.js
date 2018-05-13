import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {REMOVE_EXPENSE} from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, desc, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{desc}</h3></Link>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(REMOVE_EXPENSE({id}))
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
