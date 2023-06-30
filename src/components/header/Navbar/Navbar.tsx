import { navbarData } from './navbar.data'
import { useTranslation } from 'react-i18next'

import styles from './navbar.module.scss'
import { useMemo } from 'react' 

export const Navbar = () => {
  const { t } = useTranslation()
  const navLinks = useMemo(() => (
    navbarData.map((link) => {
      return (
        <li key={link.id} className={styles.item}>
          <a href={link.anchor} className={styles.link}>
            {t(link.title)}
          </a>
        </li>
      )
    })
  ), [t])
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{navLinks}</ul>
    </nav>
  )
}
