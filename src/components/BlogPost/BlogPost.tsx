import { Component, For } from 'solid-js'
import SolidMarkdown from 'solid-markdown'
import { BlockQuote, CodeBlock } from '../index'
import style from './BlogPost.module.css'
import { NormalComponents } from 'solid-markdown/dist/complex-types'

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
  return (
    <article class={style.container}>
      {metadata && (
        <BlogPostHeader
          author={metadata.author}
          publishedDate={metadata.publishedDate}
        />
      )}
      <SolidMarkdown
        components={{
          h1: ({ children }) => <h2 class={style.title}>{children}</h2>,
          blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
          code({ inline, children }) {
            return inline ? (
              <code>{children}</code>
            ) : (
              <CodeBlock>{children}</CodeBlock>
            )
          },
        }}
      >
        {content}
      </SolidMarkdown>
    </article>
  )
}

export default BlogPost
