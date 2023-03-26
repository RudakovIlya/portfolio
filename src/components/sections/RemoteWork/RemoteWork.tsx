import { Title } from 'components/title/Title'
import { memo } from 'react'

import styles from './remote-work.module.scss'


export const RemoteWork = memo(() => {
  return (
    <section id={'contact'} className={styles.remote}>
      <div className={`container`}>
        <Title>I am ready to work remotely</Title>
      </div>
    </section>
  )
})