import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {ADD_EXPENSE} from './actions/expenses';
import {SET_TEXT_FILTER} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(ADD_EXPENSE({desc: 'water bill', amount: 4500}))
store.dispatch(ADD_EXPENSE({desc: 'gas bill', createdAt: 7500}))
store.dispatch(ADD_EXPENSE({desc: 'Rent', amount: 200000}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
<Provider store={store}>
  <AppRouter />
</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
