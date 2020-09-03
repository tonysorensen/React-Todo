// Add to do. Input field needs Submit button
// Add clear completed button
// Use this form as the header so it stays up top

import React, { Component } from 'react'

export class TodoForm extends Component {
    render(props) {
        console.log(props)
        return (
            <form onSubmit={this.handleSubmit}>
            {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
            <input
              type="text"
              name="todo"
              placeholder="Add a Todo"
            />
            <button>Add to List</button>
            <button>Clear Completed Todos</button>
          </form>
        )
    }
}

export default TodoForm

