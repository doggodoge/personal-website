import { Component, For } from 'solid-js'
import style from './App.module.css'
import { BlogPost, Social } from './components'
import { posts } from './posts'

const App: Component = () => {
  return (
    <div class={style.app}>
      <header class={style.header}>
        <h1>Gary's Website!</h1>
        <Social github="https://github.com/doggodoge" email="gary@garymoore.ie" />
      </header>

      <div class={style.contentContainer}>
        <For each={posts}>
          {blog => <BlogPost content={blog} />}
        </For>
      </div>
    </div>
  )
}

export default App
