import { Component, createSignal } from 'solid-js'
import styles from './App.module.css'
import { BlogPost, CodeBlock, Social } from './components'

const blogPostTestContent = `
# This is some Test Content

\`\`\`js
const addTwo = (x, y) => console.log(x + y)
\`\`\`
`.trim()

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

      <BlogPost content={blogPostTestContent} />
    </div>
  )
}

export default App
