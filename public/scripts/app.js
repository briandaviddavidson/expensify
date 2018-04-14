'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var user = {
  // name: 'Brian',
  age: 27,
  loc: 'DC'
};

function getLocation(loc) {
  if (loc) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      loc
    );
  }
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.loc)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
