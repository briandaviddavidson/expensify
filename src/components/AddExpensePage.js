import React from 'react';
import {connect} from 'react-redux';
import {ADD_EXPENSE} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense) => {
      props.dispatch(ADD_EXPENSE(expense));
      props.history.push('/');
    }}/>
  </div>
);

export default connect()(AddExpensePage);
