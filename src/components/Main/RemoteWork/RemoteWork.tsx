import React from 'react';
import styles from "./RemoteWork.module.scss";
import {Title} from "../../Title/Title";

export const RemoteWork = () => {
    return (
        <section id={'work'} className={styles.remote}>
            <div className={`container`}>
                <Title>Remote Work</Title>
                <button className={styles.button}>hire me</button>
            </div>
        </section>
    );
};
