import styles from './Main.module.scss'
import Skills from "./Skills/Skills";
import {Intro} from "./Intro/Intro";

const Main = () => {
    return (
        <main className={styles.main}>
            <Intro/>

            <Skills/>

        </main>
    );
};

export default Main;