import React from "react";
import {connect} from "react-redux";
import {
  Button,
  Form,
  Dimmer,
  Loader,
  Image,
  Segment,
  Message
} from "semantic-ui-react"
import { login } from "../actions/userActions"
import { gotoRegister,  gotoTodoManager } from "../paths/pagesPaths"

class Login extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps);
    if(nextProps.userSate.user)
      this.props.dispatch(gotoTodoManager())
  }
  onLogin(e) {
    const data = {
      email: this.email,
      password: this.password
    };
    console.log(data);
    this.props.dispatch(login(data));
  }

  onEmailChange(e) {
    this.email = e.target.value;
  }

  onPasswordChange(e) {
    this.password = e.target.value;
  }

  onRegister(e) {
    this.props.dispatch(gotoRegister());
  }

  render() {
    return (
      <Segment>
        <Dimmer active={this.props.userSate.loading}>
          <Loader>Loading</Loader>
        </Dimmer>
        <div>
          <h2>Login</h2>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email...." onChange={this.onEmailChange.bind(this)}/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="password..." type="password" onChange={this.onPasswordChange.bind(this)}/>
            </Form.Field>
              <Button type="submit" onClick={this.onLogin.bind(this)}>Login</Button>

          </Form>
          <Message>
            <div>
              {this.props.userSate.message}
            </div>
            New to us ?  <Button type="register" onClick={this.onRegister.bind(this)}>Register</Button>
          </Message>
        </div>
        <Image src='/assets/images/wireframe/short-paragraph.png'/>
      </Segment>

    );
  }
}

function mapStateToProps(state) {
  return {userSate: state.user};
}
export default connect(mapStateToProps)(Login)
