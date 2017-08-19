import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"

class App extends Component {

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
        <h1>todos count: {todos.length}</h1>
        <ul>{todos}</ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
