import { navbarData } from './navbar.data'
import { useTranslation } from 'react-i18next'

import styles from './navbar.module.scss'

export const Navbar = () => {
  const { t } = useTranslation()
  const navLinks = navbarData.map((link) => {
    return (
      <li key={link.id} className={styles.item}>
        <a href={link.anchor} className={styles.link}>
          {t(link.title)}
        </a>
      </li>
    )
  })
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{navLinks}</ul>
    </nav>
  )
}
