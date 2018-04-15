const app = {
  title: 'Indecision App',
  subtitle:'Put your life in the hands of a computer',
  options: [],
}
const appRoot = document.getElementById('app');

const formSubmitted = (e) => {
  e.preventDefault();

  const opt = e.target.elements.option.value;

  if (opt) {
    app.options.push(opt);
    e.target.elements.option.value = '';
    render();
  }
}

const removeAll = () => {
  app.options = [];
  render();
}

const render = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
    <button onClick={removeAll}>Remove All</button>
    <ol>

    </ol>
    <p>{app.options.length}</p>
    <form onSubmit={formSubmitted}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
}

render();
