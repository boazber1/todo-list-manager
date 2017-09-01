import React from 'react';
import { connect } from 'react-redux'
import { gotoLogin } from "../paths/pagesPaths"
import { getAuthorizationToken } from "../Auth/setAuthorizationToken"
import jwt_decode from "jwt-decode";
import { loginSucceed } from "../actions/userActions"


function requiredAuth(ComposedComponent) {

  class RequiredAuth extends React.Component {

    componentWillMount() {
        if(!this.props.userState.user) {
          this.props.dispatch(gotoLogin());
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if(!nextProps.userState.user) {
          this.props.dispatch(gotoLogin())
        }
    }

    render() {
      return (
          <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      userState : state.user
    }
  }

  return connect(mapStateToProps)(RequiredAuth);

}

export default requiredAuth;
