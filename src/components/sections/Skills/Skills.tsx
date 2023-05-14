import { Skill } from 'components/sections/Skills/Skill/Skill'
import { skills } from 'components/sections/Skills/skills.data'
import { Title } from 'components/title/Title'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './skills.module.scss'

export const Skills = memo(() => {
  const { t } = useTranslation()
  const mappedSkills = skills.map((skill) => {
    return <Skill key={skill.skillID} skill={skill} />
  })

  return (
    <section id={'skills'} className={styles.skills}>
      <div className={`container`}>
        <Title>{t('my-skills')}</Title>
        <ul className={styles.list}>{mappedSkills}</ul>
      </div>
    </section>
  )
})
