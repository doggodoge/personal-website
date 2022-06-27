import { Component, For, JSX } from 'solid-js'
import SolidMarkdown from 'solid-markdown'
import { BlockQuote, CodeBlock } from '../index'
import style from './BlogPost.module.css'

interface BlogPostMetadata {
  author: string
  publishedDate: Date
  tags?: string[]
}

const BlogPostHeader: Component<BlogPostMetadata> = ({
  author,
  publishedDate,
  tags,
}) => {
  return (
    <div>
      <div class={style.authorAndDateContainer}>
        <div>{author}</div>
        <div>/</div>
        <div>{publishedDate.toDateString()}</div>
      </div>
      <For each={tags}>{item => <div>{item}</div>}</For>
    </div>
  )
}

interface BlogPostProps {
  metadata?: BlogPostMetadata
  content: string
}

const BlogPost: Component<BlogPostProps> = ({ metadata, content }) => {
  const customMarkdownElements = {
    h1: ({ children }) => <h2 class={style.title}>{children}</h2>,
    blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
    code({ inline, children }) {
      return inline ? (
        <code>{children}</code>
      ) : (
        <CodeBlock>{children}</CodeBlock>
      )
    },
  }

  return (
    <article class={style.container}>
      <BlogPostHeader
        author="Gary Moore"
        publishedDate={new Date(Date.now())}
      />
      <SolidMarkdown components={customMarkdownElements}>
        {content}
      </SolidMarkdown>
    </article>
  )
}

export default BlogPost
