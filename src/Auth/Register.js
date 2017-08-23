import React, { Component } from "react"
import { connect } from "react-redux"


class Register extends Component {
    render() {
      return <h1> register </h1>
    }
}

function mapStateToProps(store) {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(Register);
