import { footer } from './footer.data'
import { Title } from '../title/Title'
import { useTranslation } from 'react-i18next'

import styles from './footer.module.scss'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <Title>{t('me')}</Title>
        <ul className={styles.list}>
          {footer.map(({ link, id, Icon, prefix }) => {
            return (
              <li key={id} className={styles.item}>
                <a rel='noreferrer' target={'_blank'} href={link}>
                  <Icon className={`${styles[`${prefix}`]}`} size={50} />
                </a>
              </li>
            )
          })}
        </ul>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} {t('all-rights')}.</p>
      </div>
    </footer>
  )
}
