import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import dateformat from 'dateformat';

class Todo extends Component {
  constructor() {
    super();
    this.state = {  isEditMode: false };
  }

  onDelete(e) {
    this.props.delete({id: this.props.id})
  }

  onEdit(e) {
    this.setState({...this.state, task: this.props.task, isEditMode: true})
  }

  onTaskCange(e) {
    this.setState({...this.state, task: e.target.value});
  }

  onCancel(e) {
    this.setState({ isEditMode: false });
  }

  onSave(e) {
    const data = {
      id: this.props.id,
      task: this.state.task,
      order: this.props.order
    }
    this.props.save(data);
    this.setState({...this.state, isEditMode: false});
  }

  render() {
    let taskElement = (
      <p>
        {this.props.task}
      </p>
    );
    let buttons = (
      <div className='ui two buttons'>
        <Button basic color='green' onClick={this.onEdit.bind(this)}>Edit</Button>
        <Button basic color='red' onClick={this.onDelete.bind(this)}>Delete</Button>
      </div>
    );



    if(this.state.isEditMode) {
      taskElement = (
        <input value={this.state.task} onChange={this.onTaskCange.bind(this)}/>
      );
      buttons = (
        <div className='ui two buttons'>
          <Button basic color='green' onClick={this.onSave.bind(this)}>Save</Button>
          <Button basic color='red' onClick={this.onCancel.bind(this)}>Cancel</Button>
        </div>
      );
    }

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Created: {dateformat(this.props.created_at,"dd/mm/yy HH:MM")}
          </Card.Header>
          <Card.Meta>
            <div>
              Modified: {dateformat(this.props.updated_at,"dd/mm/yy HH:MM")}
            </div>
          </Card.Meta>
          <Card.Description>
            <div>
              {taskElement}
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {buttons}
        </Card.Content>
      </Card>
    );
  }

}

export default Todo;
