import React from 'react';
import { createStore } from "redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducer = function (state, action) {
    var { type , payload } = action;
    switch(type) {
      case "INC":
          return state + payload
        break;
      case "DEC":
          return state - payload;
        break;
    }
    return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("store change", store.getState())
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 2});

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
