class IndecisionApp extends React.Component {
  constructor (props) {
    super(...arguments);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
    this.state = {
      options: props.options
    }
  }
  handleDeleteOptions () {
    this.setState(() => ({options: []}));
  }
  handleDeleteSingleOption (optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick () {
    const options = this.state.options;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];

    alert(option);
  }
  handleAddOption (option) {
    if (!option) {
      return 'Enter a valid item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This item already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  render() {
    const subtitle = `Randomly select an option to help you decide`;
    return (
      <div>
        <Header
          subtitle={subtitle}
        />
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
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {

  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map((option) => (
          <Option
            key={option}
            option={option}
            handleDeleteSingleOption={props.handleDeleteSingleOption}
          />))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
        {props.option}
        <button onClick={(e) => {
            props.handleDeleteSingleOption(props.option);
        }}>
          Remove
        </button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor () {
    super(...arguments)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption (e) {
    e.preventDefault();

    const opt = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(opt);

    this.setState(() => ({error}));

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
