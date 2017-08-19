import React from "react";
import {connect} from "react-redux";
import {
  Button,
  Form,
  Dimmer,
  Loader,
  Image,
  Segment
} from "semantic-ui-react"
import {login} from "../actions/userActions"

class Login extends React.Component {

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

  render() {
    return (
      <Segment>
        <Dimmer active={this.props.user.loading}>
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
        </div>
        <Image src='/assets/images/wireframe/short-paragraph.png'/>
      </Segment>

    );
  }
}

function mapStateToProps(state) {
  return {user: state.user};
}
export default connect(mapStateToProps)(Login)
