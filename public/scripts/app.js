'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Test'
    ),
    React.createElement(
      'li',
      null,
      'Test 2'
    )
  )
);

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Brian Davidson'
  ),
  React.createElement(
    'p',
    null,
    'Age: 26'
  ),
  React.createElement(
    'p',
    null,
    'Location: Washington, DC'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
