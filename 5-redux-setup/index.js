import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import Todos from './components/list'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('root')
)
