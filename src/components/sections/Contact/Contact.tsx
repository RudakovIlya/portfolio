import { contacts } from './contact.data'
import { Form } from './form/Form'
import { MyInfo } from './my-info/MyInfo'
import { Title } from 'components/title/Title'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './contact.module.scss'

export const Contact = memo(() => {
  const { t } = useTranslation()
  const contactsItems = contacts.map((contact) => {
    return <MyInfo key={contact.link} {...contact} />
  })

  return (
    <section className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <Title>{t('contacts')}</Title>
        <div className={styles.forms}>
          <ul className={styles.list}>{contactsItems}</ul>
          <Form />
        </div>
      </div>
    </section>
  )
})
