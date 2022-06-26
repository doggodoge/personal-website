import { Component, For } from 'solid-js'
import styles from './App.module.css'
import { BlogPost, Social } from './components'

// TODO: Create a transparent blurry header, and make sure
//  it's sticky.

const blogOne = `

# This is some Test Content

\`\`\`js
const addTwo = (x, y) => console.log(x + y)
\`\`\`
`.trim()

const blogTwo = `
# This is a second test post, or whatever

> How do we do quotes?

- Some of this two, how?
- And some of this?
`.trim()

const blogs: string[] = [blogOne, blogTwo]

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

      <For each={blogs}>{blog => <BlogPost content={blog} />}</For>
    </div>
  )
}

export default App
