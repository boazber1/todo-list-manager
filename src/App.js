import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"

import { gotoLogin } from "./paths/pagesPaths"
import { Transition } from "semantic-ui-react"
class App extends Component {

  constructor() {
    super();
    this.vidible = false;
  }

  gotoLogin(e) {
    this.props.dispatch(gotoLogin())
    this.vidible = true;
  }

  render() {
    var todos = [];
    if(this.props.todosState.todos)
      var todos = this.props.todosState.todos.map((task, i) => {
        return (<li>{task.task}</li>);
      });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <button onClick={this.gotoLogin.bind(this)}>goto login</button>
        <div>
        <Transition visible={this.vidible} animation='fade' duration={1500}>
          <div>
            {this.props.children}
          </div>
        </Transition>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    todosState: store.todosState
  }
}

export default connect(mapStateToProps)(App);
