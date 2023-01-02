import styles from './Header.module.scss'
import Navbar from "./Navbar/Navbar";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Navbar/>
            </div>
        </header>
    );
};
