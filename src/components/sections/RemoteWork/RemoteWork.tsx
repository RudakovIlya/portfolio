import { memo } from 'react'

import { Button } from '../../button/Button'
import { Title } from '../../title/Title'

import styles from './remote-work.module.scss'

export const RemoteWork = memo(() => {
  return (
    <section id={'work'} className={styles.remote}>
      <div className={`container`}>
        <Title>Remote Work</Title>
        <Button>hire me</Button>
      </div>
    </section>
  )
})
