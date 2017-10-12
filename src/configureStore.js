import { createStore, combineReducers } from 'redux'
import todoApp from './reducers'
import { loadState, saveState } from './utils/localStorage'

const mockTodos = [
  {
    text: 'hey',
    id: 0,
    completed: false
  },
  {
    text: 'ho',
    id: 1,
    completed: true
  }
]

const store = createStore(
  todoApp,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveState(store.getState()))

export default store
