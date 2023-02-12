import {Work} from "./Work/Work";
import styles from './Works.module.scss'
import {Title} from "../../Title/Title";
import {works} from "./index";
import {memo} from "react";

export const Works = memo(() => {

    const mappedWorks = works.map(work => {
        return (
            <Work key={work.id} work={work}/>
        )
    });

    return (
        <section id={'projects'} className={styles.works}>
            <div className={`container`}>
                <Title>My Works</Title>
                <ul className={styles.list}>
                    {mappedWorks}
                </ul>
            </div>
        </section>
    );
})
