import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/saga";
import reducers from "./reducer";
import { Provider } from 'react-redux'
import 'babel-polyfill'





const sagaMiddleware = createSagaMiddleware();

const reducerCollection =combineReducers(reducers);

const store =createStore(reducerCollection, applyMiddleware(sagaMiddleware));

// redux-saga 监控
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
