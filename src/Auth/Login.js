import React, { Component } from "react";
import { connect } from "react-redux";
 class Login extends Component {
  render() {

  }
}

function mapStateToProps(store) {
  return {
    user: store.user
  }
}
export default Login connect(mapStateToProps)(Login)
