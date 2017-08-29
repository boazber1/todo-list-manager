import React, { Component } from 'react';
import { Segment, Header, Card, Dimmer, Loader} from 'semantic-ui-react';
import { connect } from 'react-redux';

class TodoList extends Component {

  render() {
    //TODO: TodoLogic
    
    return (
      <Segment>
          <Header>
            Todo List
          </Header>
        <Dimmer active={this.props.todosState.loading}>
          <Loader>Loading</Loader>
        </Dimmer>
        <Card.Group>

        </Card.Group>
      </Segment>
    );
  }

}

function mapToProps(state) {
    return {
      todosState : state.todosState
    };
}

export default connect(mapToProps)(TodoList) ;
