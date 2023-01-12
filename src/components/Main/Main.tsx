import styles from './Main.module.scss'
import Skills from "./Skills/Skills";
import {Intro} from "./Intro/Intro";
import {Works} from "./Works/Works";
import {RemoteWork} from "./RemoteWork/RemoteWork";
import Contact from "./Contact/Contact";

const Main = () => {
    return (
        <main className={styles.main}>
            <Intro/>
            <Skills/>
            <Works/>
            <RemoteWork/>
            <Contact/>
        </main>
    );
};

export default Main;