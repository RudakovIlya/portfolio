import { ThemeContext } from 'App'
import { Button } from 'components/button/Button'
import { useContactForm } from 'components/sections/Contact/form/use-form'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './form.module.scss'


export const Form = () => {
  const { nameError, emailError, messageError, onSubmit, register, form } = useContactForm()
  const { theme } = useContext(ThemeContext)
  return (
    <form ref={form} onSubmit={onSubmit} className={styles.form}>
      <input
        {...register('user_name')}
        name={'user_name'}
        placeholder={'Your name'}
        className={`${styles.field}`}
        type='text'
      />
      {nameError && <span className={styles.error}>{nameError}</span>}
      <input
        {...register('user_email')}
        name={'user_email'}
        placeholder={'Your email'}
        className={`${styles.field}`}
        type='email'
      />
      {emailError && <span className={styles.error}>{emailError}</span>}
      <textarea
        {...register('message')}
        name={'message'}
        placeholder={'Message'}
        className={`${styles.textarea} ${styles.field}`}></textarea>
      {messageError && <span className={styles.error}>{messageError}</span>}
      <Button type={'submit'}>Send</Button>
      <ToastContainer theme={theme === 'light' ? 'dark' : 'light'} />
    </form>
  )
}