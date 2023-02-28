import { memo } from 'react'

import { ParticlesContainer } from '../particles/ParticlesContainer'

import { Contact } from './Contact/Contact'
import { Intro } from './Intro/Intro'
import { RemoteWork } from './RemoteWork/RemoteWork'
import { Skills } from './Skills/Skills'
import { Works } from './Works/Works'
import styles from './main.module.scss'


export const Main = memo(() => {
  return (
    <main className={styles.main}>
      <ParticlesContainer />
      <Intro />
      <Skills />
      <Works />
      <RemoteWork />
      <Contact />
    </main>
  )
})