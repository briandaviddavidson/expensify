import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  clearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };
  handleDeleteSingleOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const options = this.state.options;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];

    this.setState(() => ({selectedOption: option}))
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  };
  componentDidMount () {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  render() {
    const subtitle = `Randomly select an option to help you decide`;
    return (
      <div>
        <Header
          subtitle={subtitle}
        />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteSingleOption={this.handleDeleteSingleOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
        <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
