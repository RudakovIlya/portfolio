import styles from './Main.module.scss'
import Skills from "./Skills/Skills";
import {Intro} from "./Intro/Intro";
import {Works} from "./Works/Works";

const Main = () => {
    return (
        <main className={styles.main}>
            <Intro/>
            <Skills/>
            <Works/>
        </main>
    );
};

export default Main;