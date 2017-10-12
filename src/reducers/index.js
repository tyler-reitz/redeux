import { createStore, combineReducers } from 'redux'

import { todos } from './todos'

const todoApp = combineReducers({
  todos
})

export default todoApp

export const getVisibleTodos = (state, match) => {
  switch (match) {
    case 'completed':
      return state.filter(t => t.completed)
    case 'active':
      return state.filter(t => !t.completed)
    default:
      return state
  }
}
