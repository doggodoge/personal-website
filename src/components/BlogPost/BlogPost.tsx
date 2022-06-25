import { Component, For } from 'solid-js'
import SolidMarkdown from 'solid-markdown'
import { CodeBlock } from '../index'

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
      <div>
        <div>{author}</div>
        <div>{publishedDate.toDateString()}</div>
      </div>
      <For each={tags} fallback={<div>No tags.</div>}>
        {item => <div>{item}</div>}
      </For>
    </div>
  )
}

interface BlogPostProps {
  metadata?: BlogPostMetadata
  content: string
}

const BlogPost: Component<BlogPostProps> = ({ metadata, content }) => {
  const customMarkdownElements = {
    code({ inline, children }) {
      return inline ? (
        <code>{children}</code>
      ) : (
        <CodeBlock>{children}</CodeBlock>
      )
    },
  }

  return (
    <article>
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
