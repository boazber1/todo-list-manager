import React from 'react';
import { createStore, combineReducers } from "redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { userReducer, todoReducer } from "./reducers/todolistReduserces";
import { Provider } from "react-redux";

const reducers = combineReducers({
  user: userReducer,
  todoList: todoReducer
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store change", store.getState())
});

ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>
  , document.getElementById('root'));
registerServiceWorker();
