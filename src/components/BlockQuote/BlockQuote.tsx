import { Component, JSX } from 'solid-js'
import style from './BlockQuote.module.css'

interface BlockQuoteProps {
  children: JSX.Element
}

const BlockQuote: Component<BlockQuoteProps> = ({ children }) => {
  return <div class={style.container}>{children}</div>
}

export default BlockQuote
