var template = (
<div>
  <h1>Indecision App</h1>
  <p>This is some info</p>
  <ol>
    <li>Test</li>
    <li>Test 2</li>
  </ol>
</div>
);

var template2 = (
<div>
  <h1>Brian Davidson</h1>
  <p>Age: 26</p>
  <p>Location: Washington, DC</p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
