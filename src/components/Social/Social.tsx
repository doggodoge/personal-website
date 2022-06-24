import { Component, Show } from 'solid-js'
import style from './Social.module.css'

interface SocialProps {
  github?: string;
  linkedin?: string;
  email?: string;
}

const Social: Component<SocialProps> = ({ github, linkedin, email }) => {
  return (
    <div class={style.container}>
      {github && (
        <a class={style.socialItem} href={github}>GitHub</a>
      )}
      {linkedin && (
        <a class={style.socialItem} href={linkedin}>LinkedIn</a>
      )}
      {email && (
        <a class={style.socialItem} href={`mailto:${email}`}>Email</a>
      )}
    </div>
  )
}

export default Social;
