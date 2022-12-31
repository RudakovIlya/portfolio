import styles from './Header.module.scss'
import Navbar from "./navbar/Navbar";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar/>
        </header>
    );
};
