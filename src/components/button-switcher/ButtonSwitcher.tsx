import { useContext, useEffect } from 'react'
import { MdOutlineBrightness6 } from 'react-icons/md'

import { ThemeContext } from '../../App'

import styles from './button-switcher.module.scss'

export const ButtonSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const onClick = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button className={styles.button} onClick={onClick}>
      <MdOutlineBrightness6 color={theme === 'dark' ? '#1A1718' : '#FAF7F8'} size={30} />
    </button>
  )
}
