import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import { userReducer, todoReducer } from "./reducers/todolistReduserces";
import logger from "redux-logger"
import createSagaMiddleware  from "redux-saga"
import rootSaga from "./networkLayer/api-middleware"

import App from './App';
import  Login  from "./Auth/Login"

import { login } from "./actions/userActions"

import { fatchTodos , createTodos, deleteTodos } from "./tests/testRedusers"


import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const reducers = combineReducers({
  user: userReducer,
  todosState: todoReducer
});

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware( sagaMiddleware ,logger );
const store = createStore(reducers, middleware);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
        <Provider store={store}>
          <Login />
        </Provider>
  , document.getElementById('root'));
registerServiceWorker();
