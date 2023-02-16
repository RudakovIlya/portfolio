import { ButtonSwitcher } from '../ButtonSwitcher/ButtonSwitcher'

import Navbar from './Navbar/Navbar'
import styles from './index.module.scss'


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