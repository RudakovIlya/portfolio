import { memo } from 'react'

import { Button } from '../../Button/Button'
import { Title } from '../../Title/Title'

import styles from './RemoteWork.module.scss'


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