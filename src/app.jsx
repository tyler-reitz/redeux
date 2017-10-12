import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import TodoApp from './components/todoApp'

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={TodoApp} />
    </Router>
  </Provider>
)

export default App
