'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};
var appRoot = document.getElementById('app');

var formSubmitted = function formSubmitted(e) {
  e.preventDefault();

  var opt = e.target.elements.option.value;

  if (opt) {
    app.options.push(opt);
    e.target.elements.option.value = '';
    render();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options available'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'form',
      { onSubmit: formSubmitted },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
