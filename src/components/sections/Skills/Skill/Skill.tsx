import { FC, memo } from 'react'
import { IconType } from 'react-icons'

import styles from './skill.module.scss'


type SkillType = {
  skillID: number
  title: string
  Icons: IconType
  fill: string
}

type SkillPropsType = {
  skill: SkillType
}

export const Skill: FC<SkillPropsType> = memo(({ skill }) => {
  const { Icons, title, fill } = skill

  return (
    <li className={styles.skill}>
      <div className={styles.inner}>
        <div className={styles.square}>
          <Icons size={50} color={fill} />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </li>
  )
})