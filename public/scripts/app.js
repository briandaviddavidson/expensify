'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};

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
    app.options.length > 0 ? 'We have options' : 'No options available'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      app.options[0]
    ),
    React.createElement(
      'li',
      null,
      app.options[1]
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounter();
};
var minusOne = function minusOne() {
  count--;
  renderCounter();
};
var reset = function reset() {
  count = 0;
  renderCounter();
};

var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
  var template2 = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { id: 'plus', onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { id: 'minus', onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { id: 'reset', onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(template2, appRoot);
};

renderCounter();
