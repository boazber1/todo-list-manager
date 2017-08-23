import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { userReducer, todoReducer } from "./reducers/todolistReduserces";
import { Provider } from "react-redux";
import { fatchTodos , createTodos, deleteTodos } from "./tests/testRedusers"

import createSagaMiddleware  from "redux-saga"
import rootSaga from "./networkLayer/api-middleware"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { login } from "./actions/userActions"
import  Login  from "./Auth/Login"
import 'semantic-ui-css/semantic.min.css';

const reducers = combineReducers({
  user: userReducer,
  todosState: todoReducer
})
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware( sagaMiddleware ,logger);
const store = createStore(reducers, middleware);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
        <Provider store={store}>
          <Login />
        </Provider>
  , document.getElementById('root'));
registerServiceWorker();
