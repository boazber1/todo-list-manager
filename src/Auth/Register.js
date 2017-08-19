import React, { Component } from "react"
import { connect } from "react-redux"


class Register extends Component {
    render() {

    }
}

function mapStateToProps(store) {
  return {
    user: store.user
  }
}

export default Login connect(mapStateToProps)(Register);
