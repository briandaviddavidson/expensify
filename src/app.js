class IndecisionApp extends React.Component {
  constructor () {
    super(...arguments);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['1', '2', '3']
    }
  }
  handleDeleteOptions () {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick () {
    const options = this.state.options;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];

    alert(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = `Randomly select an option to help you decide`;
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Action
          hasOptions={this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {this.props.options.map((option) => <Option key={option} option={option}/>)}
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
          {this.props.option}
      </div>
    );
  }
}

class AddOption extends React.Component {
  formSubmitted (e) {
    e.preventDefault();

    const opt = e.target.elements.option.value.trim();

    if (opt) {
      alert(opt);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitted}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
