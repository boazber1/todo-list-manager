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
import { gotoTodoManager } from "../paths/pagesPaths"

class Register extends Component {
    constructor() {
      super();
      this.email = "";
      this.password = "";
    }

    componentWillUpdate(nextProps, nextState) {
      if(nextProps.userState.user)
        this.props.dispatch(gotoTodoManager())
    }

    onRegister = (e) => {
      const data = {
          email: this.email,
          password: this.password
        };

      this.props.dispatch(register(data));
    }

    onEmailChange = (e) => {
      this.email = e.target.value;
    }

    onPasswordChange = (e) =>  {
      this.password = e.target.value;
    }

    render() {
      return (
        <Segment>
          <Dimmer active={this.props.userState.loading}>
            <Loader>Loading</Loader>
          </Dimmer>
          <div>
            <h2>Register</h2>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email...." onChange={this.onEmailChange}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="password..." type="password" onChange={this.onPasswordChange}/>
              </Form.Field>
              <Button type="submit" onClick={this.onRegister}>Register</Button>
            </Form>
          </div>
          <Image src='/assets/images/wireframe/short-paragraph.png'/>
        </Segment>
      );
    }
}

function mapStateToProps(store) {
  return {
    userState: store.user
  }
}

export default connect(mapStateToProps)(Register);
