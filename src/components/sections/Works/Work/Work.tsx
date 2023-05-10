import { Button } from 'components/button/Button'
import { FC, memo } from 'react'

import styles from './work.module.scss'


type WorkType = {
  id: number
  title: string
  img: string
  description: string
  linkDeploy: string
  linkRepo: string
}

type WorkPropsType = {
  work: WorkType
}

export const Work: FC<WorkPropsType> = memo(({ work }) => {
  const { title, img, linkDeploy, linkRepo } = work
  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <div className={styles['image-wrapper']}>
          <img className={styles.image} src={img} alt={`project: ${title}`} />
          <div className={styles.link}>
            <Button className={styles.button}  target={'_blank'} as={'a'} href={linkDeploy}>
              Demo
            </Button>
            <Button target={'_blank'} as={'a'} href={linkRepo}>
              Repo
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </li>
  )
})