import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../todoList'
import { toggleTodo } from '../../actions'
import { getVisibleTodos } from '../../reducers'

const mapStateToProps = ({ todos }, { match: { params: { filter }}}) => ({
  todos: getVisibleTodos(todos, filter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodos
