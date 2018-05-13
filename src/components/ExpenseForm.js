import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
  state = {
    desc: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calFocused: false,
    error: ''
  };

  onDescChange = (e) => {
    const desc = e.target.value;
    this.setState(() => ({desc}));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){
     this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({ calFocused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.desc || !this.state.amount){
      this.setState(() => ({error: 'Please provide description and amount'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        desc: this.state.desc,
        note: this.state.note,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description..."
            autoFocus
            value={this.state.desc}
            onChange={this.onDescChange}
          />
          <input
            type="text"
            placeholder="Amount..."
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (Optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
