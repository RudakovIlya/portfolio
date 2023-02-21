import { memo } from 'react'

import { Title } from '../../title/Title'

import { Work } from './Work/Work'
import { works } from './works.data'
import styles from './works.module.scss'

export const Works = memo(() => {
  const mappedWorks = works.map((work) => {
    return <Work key={work.id} work={work} />
  })

  return (
    <section id={'projects'} className={styles.works}>
      <div className={`container`}>
        <Title>My Works</Title>
        <ul className={styles.list}>{mappedWorks}</ul>
      </div>
    </section>
  )
})
