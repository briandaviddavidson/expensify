import React from 'react';
import {connect} from 'react-redux';
import {EDIT_EXPENSE, REMOVE_EXPENSE} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(EDIT_EXPENSE(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(REMOVE_EXPENSE({id: props.expense.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
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
