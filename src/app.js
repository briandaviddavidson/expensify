class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = `Randomly select an option to help you decide`;
    const options = ['1', '2', '4'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
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
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
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
        <p>
          {this.props.option}
        </p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        Here is some options
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
