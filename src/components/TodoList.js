

//  receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import Todo from './Todo'
import React from 'react';

const TodoList = (props) => {
    console.log('props from app',props)
  
    return (
        <div className="todo-list">
        {props.todo.map((item) => (
          <Todo key={item.id} item={item.todo} id={item.id} completed={item.completed}  toggleItem={props.toggleItem} />
        ))}
      </div>
    );
}

export default TodoList;

