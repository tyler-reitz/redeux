import React from 'react'

import VisibleTodos from '../visibleTodos'
import AddTodo from '../addTodo'
import Footer from '../footer'

const TodoApp = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodos match={match} />
    <Footer />
  </div>
)

export default TodoApp
