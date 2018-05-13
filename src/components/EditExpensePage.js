import React from 'react';
import {connect} from 'react-redux';
import {EDIT_EXPENSE} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  return (
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(EDIT_EXPENSE(props.expense.id, expense));
        props.history.push('/');
      }}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  }
};

export default connect(mapStateToProps)(EditExpensePage);
