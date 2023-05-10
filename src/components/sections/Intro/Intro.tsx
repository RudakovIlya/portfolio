import { memo } from 'react'

import styles from './intro.module.scss'

export const Intro = memo(() => {
  return (
    <section id={'intro'} className={styles.intro}>
      <div className={`container ${styles.container}`}>
        <div>
          <span>Hi, there!</span>
          <h1>My name is Ilya Rudakov.</h1>
          <p>I'm frontend developer</p>
          <p>
            You can find more information about me in my{' '}
            <a
              rel='noreferrer'
              target={'_blank'}
              href={'https://drive.google.com/file/d/1d-cFfjeZ4rl5ELklTyZVdXLzDFlOs0Qm/view?usp=sharing'}>
              CV
            </a>
          </p>
        </div>
        <div className={styles.photo} />
      </div>
    </section>
  )
})