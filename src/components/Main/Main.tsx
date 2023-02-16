import { memo } from 'react'

import { ParticlesContainer } from '../Particles/ParticlesContainer'

import { Contact } from './Contact/Contact'
import { Intro } from './Intro/Intro'
import styles from './Main.module.scss'
import { RemoteWork } from './RemoteWork/RemoteWork'
import { Skills } from './Skills/Skills'
import { Works } from './Works/Works'


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