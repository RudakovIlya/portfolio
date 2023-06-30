import { FC, memo } from 'react'
import { IconType } from 'react-icons'
import { useTranslation } from 'react-i18next'

interface IMyInfo {
  link: string
  Icon: IconType
}

export const MyInfo: FC<IMyInfo> = memo(({ Icon, link }) => {
  const { t } = useTranslation()
  const currentLink = link.includes('@gmail.com') ? 'mailto:' : link.includes('988') ? 'tel:' : ''
  return (
    <li key={link}>
      <a rel='noreferrer' target={'_blank'} href={`${currentLink}${link}`}>
        <Icon size={30} />
        <span>{link.includes('wiki') ? t('address') : link.includes('drive') ? `${t('my')} CV` : link}</span>
      </a>
    </li>
  )
})
