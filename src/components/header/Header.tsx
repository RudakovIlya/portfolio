import { ButtonSwitcher } from '../button-switcher/ButtonSwitcher'
import { Navbar } from './Navbar/Navbar'
import { LangSwitcher } from '../lang-switcher/LangSwitcher'

import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <ButtonSwitcher />
        <LangSwitcher />
        <Navbar />
      </div>
    </header>
  )
}
