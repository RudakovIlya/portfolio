import { Work } from './Work/Work'
import { works } from './works.data'
import { Title } from 'components/title/Title'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './works.module.scss'

export const Works = memo(() => {
  const { t } = useTranslation()
  const mappedWorks = works.map((work) => {
    return <Work key={work.id} work={work} />
  })

  return (
    <section id={'projects'} className={styles.works}>
      <div className={`container`}>
        <Title>{t('my-works')}</Title>
        <ul className={styles.list}>{mappedWorks}</ul>
      </div>
    </section>
  )
})
