import React from 'react';
import {connect} from 'react-redux';
import {SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT} from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(SET_TEXT_FILTER(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(SORT_BY_DATE())
        } else if (e.target.value === 'amount') {
          props.dispatch(SORT_BY_AMOUNT())
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);
