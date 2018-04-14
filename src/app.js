var app = {
  title: 'Indecision App',
  subtitle:'Put your life in the hands of a computer',
  options: [
    'one',
    'two'
  ],
}

var template = (
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'We have options' : 'No options available'}</p>
</div>
);

var user = {
  // name: 'Brian',
  age: 27,
  loc: 'DC'
}

function getLocation (loc){
  if (loc) {
    return <p>Location: {loc}</p>;
  }
}

var template2 = (
<div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
{user.age >= 18 && <p>Age: {user.age}</p>}
{getLocation(user.loc)}
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
