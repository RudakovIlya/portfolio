import React from 'react';
import styles from "./Intro.module.scss";

export const Intro = () => {
    return (

        <section className={styles.intro}>
            <div className={`container ${styles.container}`}>
                <div>
                    <span>Hi, there!</span>
                    <h1>My name is Ilya Rudakov.</h1>
                    <p>I'm frontend developer</p>
                </div>
                <div className={styles.photo}/>
            </div>
        </section>

    );
};

