import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './intro.module.scss'

export const Intro = memo(() => {
  const { t } = useTranslation()
  return (
    <section id={'intro'} className={styles.intro}>
      <div className={`container ${styles.container}`}>
        <div>
          <span>{t('hi')}</span>
          <h1>{t('name')}</h1>
          <p>{t('frontend')}</p>
          <p>
            {t('cv')}&nbsp;
            <a
              rel='noreferrer'
              target={'_blank'}
              href={'https://drive.google.com/file/d/1d-cFfjeZ4rl5ELklTyZVdXLzDFlOs0Qm/view?usp=sharing'}>
              CV
            </a>
          </p>
        </div>
        <div className={styles.photo} />
      </div>
    </section>
  )
})
