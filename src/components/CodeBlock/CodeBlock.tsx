import { Component, JSX } from 'solid-js'
import style from './CodeBlock.module.css'

interface CodeBlockProps {
  children: JSX.Element
}

const CodeBlock: Component<CodeBlockProps> = ({ children }: CodeBlockProps) => {
  return (
    <div class={style.container}>
      <div class={style.codeText}>{children}</div>
      <button class={style.copyButton}>📋</button>
    </div>
  )
}

export default CodeBlock
