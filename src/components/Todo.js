// Display tasks on the screen
import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.item}</h1>
            </div>
        );
    }
}

export default Todo;
