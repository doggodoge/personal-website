import { Component, JSX } from 'solid-js'
import style from './ToolTip.module.css'

interface ToolTipProps {
  children: JSX.Element;
  maxWidth?: number;
}

const ToolTip: Component<ToolTipProps> = ({ maxWidth, children }) => {
  return (
    <div class={style.container} style={{ 'max-width': maxWidth ?? null }}>
      {children}
    </div>
  )
}

export default ToolTip;
