import { Skill } from 'components/sections/Skills/Skill/Skill'
import { skills } from 'components/sections/Skills/skills.data'
import { Title } from 'components/title/Title'
import { memo } from 'react'

import styles from './skills.module.scss'


export const Skills = memo(() => {
  const mappedSkills = skills.map((skill) => {
    return <Skill key={skill.skillID} skill={skill} />
  })

  return (
    <section id={'skills'} className={styles.skills}>
      <div className={`container`}>
        <Title>My Skills</Title>
        <ul className={styles.list}>{mappedSkills}</ul>
      </div>
    </section>
  )
})