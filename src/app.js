const app = {
  title: 'Indecision App',
  subtitle:'Put your life in the hands of a computer',
  options: [
    'one',
    'two'
  ],
}

const template = (
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 0 ? 'We have options' : 'No options available'}</p>
  <ol>
    <li>{app.options[0]}</li>
    <li>{app.options[1]}</li>
  </ol>
</div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounter();
};
const minusOne = () => {
  count--;
  renderCounter();
};
const reset = () => {
  count = 0;
  renderCounter();
};

const appRoot = document.getElementById('app');

const renderCounter = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button id="plus" onClick={addOne}>+1</button>
      <button id="minus" onClick={minusOne}>-1</button>
      <button id="reset" onClick={reset}>reset</button>
    </div>
  )
  ReactDOM.render(template2, appRoot);
}

renderCounter();
