import { Title } from 'components/title/Title'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './remote-work.module.scss'

export const RemoteWork = memo(() => {
  const { t } = useTranslation()
  return (
    <section id={'contact'} className={styles.remote}>
      <div className={`container`}>
        <Title>{t('remotely')}</Title>
      </div>
    </section>
  )
})
