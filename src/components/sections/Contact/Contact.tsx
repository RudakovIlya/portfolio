import { memo } from 'react'

import { Title } from '../../title/Title'

import { contacts } from './contact.data'
import styles from './contact.module.scss'
import Form from './form/Form'
import { MyInfo } from './my-info/MyInfo'


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