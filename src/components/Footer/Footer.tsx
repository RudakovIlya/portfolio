import styles from './Footer.module.scss'
import {Title} from "../Title/Title";
import {footer} from "./index";

export const Footer = () => {


    return (
        <footer className={styles.footer}>
            <div className={`container`}>
                <Title>Rudakov Ilya</Title>
                <ul className={styles.list}>
                    {
                        footer.map(({link, id, Icon, fill}) => {
                            return (
                                <li key={id} className={styles.item}>
                                    <a rel="noreferrer" target={'_blank'} href={link}>
                                        <Icon color={fill} size={50}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className={styles.copy}>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};
