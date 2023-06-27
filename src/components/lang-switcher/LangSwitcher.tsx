import { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './lang-switcher.module.scss'
import { ThemeContext } from '../app/App'

interface Props {
  className?: string
}

export const LangSwitcher: FC<Props> = () => {
  const { t, i18n } = useTranslation()
  const { theme } = useContext(ThemeContext)
  const onChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  return (
    <button style={{color: theme === 'dark' ? '#1A1718' : '#F3F6F9' }} onClick={onChangeLang} className={cls.button}>
      {t('lang')}
    </button>
  )
}
