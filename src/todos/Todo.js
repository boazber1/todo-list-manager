import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import dateformat from 'dateformat';

class Todo extends Component {
  constructor() {
    super();
    this.state = {  IsEditMode: false };
  }

  onDelete(e) {
    this.props.delete({id: this.props.id})
  }

  onEdit(e) {
    this.setState({...this.state, task: this.props.task, IsEditMode: true})
  }

  onTaskCange(e) {
    this.setState({...this.state, task: e.target.value});
  }

  onCancel(e) {
    this.setState({ IsEditMode: false });
  }

  onSave(e) {

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



    if(this.state.IsEditMode) {
      taskElement = (
        <input value={this.state.task} onChange={this.onTaskCange.bind(this)}/>
      );
      buttons = (
        <div className='ui two buttons'>
          <Button basic color='green' onClick={this.onEdit.bind(this)}>Save</Button>
          <Button basic color='red' onClick={this.onCancel.bind(this)}>Cancel</Button>
        </div>
      );
    }

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Created: {dateformat(this.props.created_at,"dd/mm/yy HH:mm")}
          </Card.Header>
          <Card.Meta>
            <div>
              Modified: {dateformat(this.props.updated_at,"dd/mm/yy HH:mm")}
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
