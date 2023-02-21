import { memo } from 'react'

import { Button } from '../../button/Button'
import { Title } from '../../title/Title'

import { MyInfo } from './MyInfo'
import { contacts } from './contact.data'
import styles from './contact.module.scss'

export const Contact = memo(() => {
  const contactsItems = contacts.map((contact) => {
    return <MyInfo key={contact.link} {...contact} />
  })

  return (
    <section id={'contact'} className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <Title>Contacts</Title>
        <div className={styles.forms}>
          <ul className={styles.list}>{contactsItems}</ul>
          <form action='#' className={styles.form}>
            <input placeholder={'Name'} className={`${styles.field}`} type='text' />
            <input placeholder={'Email'} className={`${styles.field}`} type='email' />
            <textarea
              placeholder={'Message'}
              className={`${styles.textarea} ${styles.field}`}
              name=''
              id=''></textarea>
            <Button type={'submit'}>Send</Button>
          </form>
        </div>
      </div>
    </section>
  )
})
