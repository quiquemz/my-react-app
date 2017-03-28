import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers/index';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';

//Creating store and enabling hot module if needed
const configureStore = () => {
    const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(configureStore);

ReactDom.render(
    <Provider store={ createStoreWithMiddleware() }>
        <Router history={ browserHistory } routes={ routes }/>
    </Provider>
    , document.getElementById('app')
);
