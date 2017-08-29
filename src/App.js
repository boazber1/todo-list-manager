import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"

import { gotoLogin } from "./paths/pagesPaths"
import { Menu } from "semantic-ui-react"
import { logout } from './actions/userActions';
class App extends Component {

  constructor() {
    super();
  }

  gotoLogin(e) {
    this.props.dispatch(gotoLogin())
  }

  handleMenu(e, {name}) {
    switch (name) {
      case "login":
        this.props.dispatch(gotoLogin())
        break;
      case "logout":
        this.props.dispatch(logout())
      default:

    }
  }

  render() {
    // var todos = [];
    // if(this.props.todosState.todos)
      // var todos = this.props.todosState.todos.map((task, i) => {
        // return (<li>{task.task}</li>);
      // });





      var menuItem = (
        <Menu.Item name="logout"
                   onClick={this.handleMenu.bind(this)}>
          Logout
        </Menu.Item>
      );
      if(!this.props.userState.user){
          menuItem = (
            <Menu.Item name="login"
                       onClick={this.handleMenu.bind(this)}>
            Login
          </Menu.Item>
        );
      }



    return (
      <div className="App">
        <Menu>
          {menuItem}
        </Menu>
        <div>
              {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    userState: store.user
  }
}

export default connect(mapStateToProps)(App);
