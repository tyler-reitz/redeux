import { todo } from './todo'

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, todo(undefined, action) ]
    case 'TOGGLE_TODO':
      return state.map(t => t.id === action.id ? todo(t, action) : t)
    default:
      return state
  }
}

export default todos
