import React from 'react';
import styles from "./Intro.module.scss";

export const Intro = () => {
    return (

        <section className={styles.intro}>
            <div className={`container ${styles.container}`}>
                <div>
                    <span>Hi, there!</span>
                    <h1>My name Ilya Rudakov.</h1>
                    <p>I'm frontend developer</p>
                </div>
                <div className={styles.photo}>
                    <img src="https://nycdsa-blog-files.s3.us-east-2.amazonaws.com/2020/10/martin-kihn/derek-zoolander-thumb-699428-feFejf8i.jpg" alt="zoolander"/>
                </div>
            </div>
        </section>

    );
};

