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
  onClick () {
    alert('onClick')
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor (props) {
    super(...arguments);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll () {
    console.log(this.props.options)
    // alert('removeAll');
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
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
