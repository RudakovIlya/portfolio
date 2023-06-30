import { FC, PropsWithChildren, memo } from 'react'

import styles from './title.module.scss'

export const Title: FC<PropsWithChildren> = memo(({ children }) => {
  return <h2 className={styles.title}>{children}</h2>
})
