import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/todos'

export function List({ add, todos }) {
  return (
    <div>
      <button onClick={() => add()}>Add Todo</button>
      <ul>{todos.all.map((todo, key) => <li key={key}>{todo.title}</li>)}</ul>
    </div>
  )
}

const mapStateToProps = ({ todos }) => {
  return {
    todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add() {
      dispatch(actions.add('Todo'))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
