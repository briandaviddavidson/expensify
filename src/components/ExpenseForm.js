import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    desc: '',
    note: '',
    amount: ''
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  };

  render () {
    return (
      <div>
        <form>
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
