import React from 'react';
import { createStore, combineReducers } from "redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { userReducer } from "./reducers/todolistReduserces";
import { Provider } from "react-redux";

const reducers = combineReducers({
  user: userReducer
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store change", store.getState())
});

store.dispatch({type: "USER_LOGIN_PANDDING", payload: "hi"});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 2});

ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>
  , document.getElementById('root'));
registerServiceWorker();
