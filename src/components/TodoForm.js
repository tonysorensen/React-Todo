// Add to do. Input field needs Submit button
// Add clear completed button
// Use this form as the header so it stays up top

import React, { Component } from 'react'

export class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
          todo: ""
        };
      }

handleChanges = (e) => {
    this.setState({
        todo: e.target.value
    })
}


handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    console.log('this.state.todo', this.state.todo)
    this.setState({
        todo: ""
    })
}

handleClear = (e) => {
    e.preventDefault();
    this.props.clearCompleted();
}

    render(props) {
        console.log(props)
        return (
            <form>
            {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
            <input
              type="text"
              name="todo"
              placeholder="Add a Todo"
              value= {this.state.todo}
              onChange= {this.handleChanges}
            />
            <button onClick={this.handleSubmit}>Add Todo</button>
            <button onClick={this.handleClear}>Clear Completed</button>
          </form>
        )
    }
}

export default TodoForm

