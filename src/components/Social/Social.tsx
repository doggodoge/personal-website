import { Component, Show } from 'solid-js'
import style from './Social.module.css'

interface SocialProps {
  github?: string;
  linkedin?: string;
  email?: string;
}

const Social: Component<SocialProps> = ({ github, linkedin, email }) => {
  return (
    <div class={style.socialContainer}>
      <Show when={github}>
        <a class={style.socialItem} href={github}>GitHub</a>
      </Show>
      <Show when={email}>
        <a class={style.socialItem} href={`mailto:${email}`}>Email</a>
      </Show>
      <Show when={linkedin}>
        <a class={style.socialItem} href={linkedin}>LinkedIn</a>
      </Show>
    </div>
  )
}

export default Social;
