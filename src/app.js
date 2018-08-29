import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { Provider } from 'react-redux';
const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));



