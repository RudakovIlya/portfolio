import { contacts } from 'components/sections/Contact/contact.data'
import { Form } from 'components/sections/Contact/form/Form'
import { MyInfo } from 'components/sections/Contact/my-info/MyInfo'
import { Title } from 'components/title/Title'
import { memo } from 'react'

import styles from './contact.module.scss'


export const Contact = memo(() => {
  const contactsItems = contacts.map((contact) => {
    return <MyInfo key={contact.link} {...contact} />
  })

  return (
    <section className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <Title>Contacts</Title>
        <div className={styles.forms}>
          <ul className={styles.list}>{contactsItems}</ul>
          <Form />
        </div>
      </div>
    </section>
  )
})