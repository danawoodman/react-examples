function Link({ action }) {
  return (
    <a
      href=''
      onClick={(e) => {
        e.preventDefault()
        action(e.target.textContent)
      }}
    >
      Click me!
    </a>
  )
}

function Application() {
  const doStuff = (text) => alert(text)
  return (
    <Link action={doStuff} />
  )
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
)
