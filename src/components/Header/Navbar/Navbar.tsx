import styles from './index.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href={'#Home'} className={styles.link}>Home</a>
                </li>
                <li className={styles.item}>
                    <a href={'#Skills'} className={styles.link}>Skills</a>
                </li>
                <li className={styles.item}>
                    <a href={'#Projects'} className={styles.link}>Projects</a>
                </li>
                <li className={styles.item}>
                    <a href={'#Contact'} className={styles.link}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;