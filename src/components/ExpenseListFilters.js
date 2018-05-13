import React from 'react';
import {connect} from 'react-redux';
import {SET_TEXT_FILTER} from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(SET_TEXT_FILTER(e.target.value));
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);
