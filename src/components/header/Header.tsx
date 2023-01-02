import styles from './Header.module.scss'
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Navbar/>
            </div>
        </header>
    );
};
export default Header