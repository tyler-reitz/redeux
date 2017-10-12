import React from 'react'

const Todo = ({ id, text, completed, onClick }) => (
  <li key={id}
    onClick={onClick}
    style={{
      textDecoration: completed
        ? 'line-through'
        : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
