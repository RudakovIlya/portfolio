import styles from './navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href={'#intro'} className={styles.link}>
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a href={'#skills'} className={styles.link}>
            Skills
          </a>
        </li>
        <li className={styles.item}>
          <a href={'#projects'} className={styles.link}>
            Projects
          </a>
        </li>
        <li className={styles.item}>
          <a href={'#contact'} className={styles.link}>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  )
}