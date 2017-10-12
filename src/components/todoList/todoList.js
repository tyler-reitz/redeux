import React from 'react'

import Todo from '../todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(({ id, ...todo }) =>
      <Todo key={id}  {...todo} onClick={() => onTodoClick(id)} />
    )}
  </ul>
)

export default TodoList
