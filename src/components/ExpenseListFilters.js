import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calFocused: null,
  }
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(SET_START_DATE(startDate))
    this.props.dispatch(SET_END_DATE(endDate))
  };
  onFocusChange = (calFocused) => {
    this.setState(() => ({calFocused}));
  };
  render () {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(SET_TEXT_FILTER(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(SORT_BY_DATE())
            } else if (e.target.value === 'amount') {
              this.props.dispatch(SORT_BY_AMOUNT())
            }
          }}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);
