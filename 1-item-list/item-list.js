function Item({ title }) {
  return (
    <li>{title}</li>
  )
}

function List({ items }) {
  return (
    <ul>
      {items.map((item) => <Item title={item.title} />)}
    </ul>
  )
}

const items = [
  { title: 'Node.js' },
  { title: 'React' },
  { title: 'Golang' },
  { title: 'Ruby on Rails' },
]

ReactDOM.render(<List items={items} />, document.getElementById('root'))
