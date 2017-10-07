import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
}

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
  { title: 12 },
]

ReactDOM.render(<List items={items} />, document.getElementById('root'))
