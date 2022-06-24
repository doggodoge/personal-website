import { Component, createSignal, JSX } from 'solid-js'
import { Transition } from 'solid-transition-group'
import style from './CodeBlock.module.css'
import ToolTip from '../ToolTip'

interface CodeBlockProps {
  children: JSX.Element
}

const CodeBlock: Component<CodeBlockProps> = ({ children }: CodeBlockProps) => {
  const [showTooltip, setShowTooltip] = createSignal(false)

  const copyToClipboard = () => {
    if (children?.toString()) {
      navigator.clipboard
        .writeText(children.toString())
        .then(() => {
          setShowTooltip(true)
          setTimeout(() => setShowTooltip(false), 1500)
        })
        .catch(error =>
          console.error(`Failed to copy to clipboard: ${error.toString()}`)
        )
    }
  }

  return (
    <div class={style.container}>
      <div class={style.codeContainer}>
        <div class={style.codeText}>{children}</div>
        <button onClick={copyToClipboard} class={style.copyButton}>
          📋
        </button>
      </div>
      <Transition
        enterClass={style.fadeEnter}
        exitToClass={style.fadeExitTo}
        enterActiveClass={style.fadeEnterActive}
        exitActiveClass={style.fadeExitActive}
      >
        {showTooltip() && <ToolTip>Copied</ToolTip>}
      </Transition>
    </div>
  )
}

export default CodeBlock
