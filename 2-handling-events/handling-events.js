function Button({ increment }) {
  return <button onClick={increment}>Math!</button>
}

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }
  }

  increment() {
    this.setState({ total: ++this.state.total })
  }

  render() {
    return (
      <div>
        <Button increment={() => this.increment()} />
        <h1>{this.state.total}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('root'))
