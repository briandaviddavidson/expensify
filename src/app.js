import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="isActive">Create</NavLink>
    <NavLink to="/edit" activeClassName="isActive">Edit</NavLink>
    <NavLink to="/help" activeClassName="isActive">Help</NavLink>
  </header>
);

const routes = (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={ExpenseDashboardPage} exact={true}/>
          <Route path='/create' component={AddExpensePage}/>
          <Route path='/edit' component={EditExpensePage}/>
          <Route path='/help' component={HelpPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
