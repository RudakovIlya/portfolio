import { footer } from 'components/footer/footer.data'
import { Title } from 'components/title/Title'

import styles from './footer.module.scss'


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <Title>Rudakov Ilya</Title>
        <ul className={styles.list}>
          {footer.map(({ link, id, Icon, prefix }) => {
            return (
              <li key={id} className={styles.item}>
                <a rel='noreferrer' target={'_blank'} href={link}>
                  <Icon className={`${styles[`${prefix}`]}`} size={50} />
                </a>
              </li>
            )
          })}
        </ul>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}