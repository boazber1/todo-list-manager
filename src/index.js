import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { userReducer, todoReducer } from "./reducers/todolistReduserces";
import { Provider } from "react-redux";
import { fatchTodos , createTodos, deleteTodos } from "./tests/testRedusers"
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

const middleware = applyMiddleware(promise() ,thunk ,logger);
const store = createStore(reducers, middleware);

//  Test
// store.subscribe(() => {
//   console.log("store change", store.getState())
// });
// createTodos(store);
// fatchTodos(store);
// deleteTodos(store);
// store.login = (data) => {
  // store.dispatch(login(data));
// }

ReactDOM.render(
        <Provider store={store}>
          <Login />
        </Provider>
  , document.getElementById('root'));
registerServiceWorker();
