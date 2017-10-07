function Item({ item }) {
  return <li>{item.title}</li>
}

function List({ addItem, items }) {
  return <ul>{items.map((item, key) => <Item key={key} item={item} />)}</ul>
}

const items = [
  { title: 'React' },
  { title: 'WebPack' },
  { title: 'Babel' },
  { title: 'Redux' },
]

ReactDOM.render(<List items={items} />, document.getElementById('root'))
