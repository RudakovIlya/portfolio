import React from 'react';
import styles from "./RemoteWork.module.scss";

export const RemoteWork = () => {
    return (
        <section className={styles.remote}>
            <div className={`container`}>
                <h2 className={styles.title}>Remote Work</h2>
                <button className={styles.button}>hire me</button>
            </div>
        </section>
    );
};
