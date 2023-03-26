import { Work } from 'components/sections/Works/Work/Work'
import { works } from 'components/sections/Works/works.data'
import { Title } from 'components/title/Title'
import { memo } from 'react'

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