import styles from './index.module.scss'
import Navbar from "./Navbar/Navbar";
import {ButtonSwitcher} from "../ButtonSwitcher/ButtonSwitcher";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <ButtonSwitcher/>
                <Navbar/>
            </div>
        </header>
    );
};
