import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import burgerBuilderreducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import { watchAuth, watchBurgerBuilder, watchOrder } from './store/sagas';

const rootReducer = combineReducers({ 
    builder: burgerBuilderreducer, 
    order: orderReducer,
    auth: authReducer 
});

const sagaMiddleware = createSagaMiddleware();

// console.log('process.env.NODE_ENV :', process.env.NODE_ENV);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = process.env.NODE_ENV === 'development' ? 
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) : null || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);
sagaMiddleware.run(watchOrder);
// console.log('this in index.js :', this);


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
