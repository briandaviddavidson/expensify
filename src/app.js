import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    this is my dashboard page
  </div>
);

const AddExpensePage = () => (
  <div>
    Create somethings
  </div>
);

const EditExpensePage = () => (
  <div>
    edit
  </div>
);

const HelpPage = () => (
  <div>
    help
  </div>
);

const routes = (
    <BrowserRouter>
      <div>
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/edit' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
      </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
