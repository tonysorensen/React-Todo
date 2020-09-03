

//  receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import Todo from './Todo'
import React from 'react';

const TodoList = (props) => {
    console.log('props',props)
    return (
        <div className="todo-list">
        {props.task.map((item) => (
          <Todo key={item.id} item={item.task}/>
        ))}
      </div>
    );
}

export default TodoList;

