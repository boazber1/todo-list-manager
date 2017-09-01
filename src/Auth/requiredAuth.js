import React from 'react';
import { connect } from 'react-redux'
import { gotoLogin } from "../paths/pagesPaths"
import setAuthorizationToken ,{ getAuthorizationToken } from "../Auth/setAuthorizationToken"
import { sessionService } from "redux-react-session"


function requiredAuth(ComposedComponent) {

  class RequiredAuth extends React.Component {

    // componentWillReceiveProps(nextProps) {
    // }

    componentWillUpdate(nextProps, nextState) {
        if(!nextProps.session.authenticated) {
          this.props.dispatch(gotoLogin())
        }
    }

    render() {
      console.log(this.props.session);
      if(!this.props.session.authenticated) {
        this.props.dispatch(gotoLogin());
      }
      else {
        if(!getAuthorizationToken() && this.props.session.user.token) {
          setAuthorizationToken(this.props.session.user.token)
        }
      }

      return (
          <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      session : state.session
    }
  }

  return connect(mapStateToProps)(RequiredAuth);

}

export default requiredAuth;
