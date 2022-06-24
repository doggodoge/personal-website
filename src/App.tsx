import { Component, createSignal } from 'solid-js'
import styles from './App.module.css'
import { CodeBlock, Social } from './components'

const Counter: Component = () => {
  const [count, setCount] = createSignal(0)

  const handleCount = () => {
    setCount(count() + 1)
  }

  return (
    <button class={styles.counterButton} onClick={handleCount}>
      Count: {count()}
    </button>
  )
}

const Header: Component = () => {
  return (
    <header style={{ display: 'flex', 'flex-direction': 'column' }}>
      <h1>Gary's Website!</h1>
      <Social github="https://github.com/doggodoge" email="gary@garymoore.ie" />
    </header>
  )
}

const App: Component = () => {
  return (
    <div class={styles.app}>
      <Header />
      <h2>Placeholder, stuff to come!</h2>
      <p>I will eventually put something here. I swear!</p>
      <p>For now play with this counter:</p>
      <div
        style={{
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          gap: '1em',
        }}
      >
        <Counter />
        <CodeBlock>
          {"// this is a comment\nconsole.log('Hi!')"}
        </CodeBlock>
      </div>
    </div>
  )
}

export default App
