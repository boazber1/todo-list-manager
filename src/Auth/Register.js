import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Button,
  Form,
  Dimmer,
  Loader,
  Image,
  Segment,
  Message
} from "semantic-ui-react"
import { register } from "../actions/userActions"

class Register extends Component {
    constructor() {
      super();
      this.email = "";
      this.password = "";
    }

    onRegister(e) {
      const data = {
          email: this.email,
          password: this.password
        };

      this.props.dispatch(register(data));
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
            <h2>Register</h2>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email...." onChange={this.onEmailChange.bind(this)}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="password..." type="password" onChange={this.onPasswordChange.bind(this)}/>
              </Form.Field>
              <Button type="submit" onClick={this.onRegister.bind(this)}>Login</Button>
            </Form>
          <div>
          <Image src='/assets/images/wireframe/short-paragraph.png'/>
        </Segment>
      );
    }
}

function mapStateToProps(store) {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(Register);
