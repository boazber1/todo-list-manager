import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { syncHistoryWithStore, routerReducer , routerMiddleware} from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import { userReducer, todoReducer } from "./reducers/todolistReduserces";
import logger from "redux-logger"
import createSagaMiddleware  from "redux-saga"
import rootSaga from "./networkLayer/api-middleware"

import App from './App';
import Login  from "./Auth/Login"
import Register from "./Auth/Register"
import TodoList from './todos/TodoList';
import requiredAuth from "./Auth/requiredAuth"



import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const reducers = combineReducers({
  user: userReducer,
  todosState: todoReducer,
  routing: routerReducer
});

const router = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware( sagaMiddleware ,logger, router );
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store)


sagaMiddleware.run(rootSaga);


ReactDOM.render(
        <Provider store={store}>
          <Router history={history}>

            <Route path="/" component={App}>
              <IndexRoute component={Login} />
              <Route path="login" component={Login} />
              <Route path="register" component={Register} />
              <Route path="todo-list" component={requiredAuth(TodoList)} />
            </Route>
          </Router>
        </Provider>
  , document.getElementById('root'));
registerServiceWorker();
