import { ButtonSwitcher } from 'components/button-switcher/ButtonSwitcher'
import { Navbar } from 'components/header/Navbar/Navbar'

import styles from './header.module.scss'


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <ButtonSwitcher />
        <Navbar />
      </div>
    </header>
  )
}