import React from 'react'
import ReactDOM from 'react-dom'

const SomeComponent = ({ message = 'whatsupp' }) => <span>{message}</span>

ReactDOM.render(
  <SomeComponent message='Hello World' />,
  document.getElementById('root')
)
