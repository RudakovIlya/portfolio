import {memo} from 'react';
import styles from "./RemoteWork.module.scss";
import {Title} from "../../Title/Title";
import {Button} from "../../Button/Button";

export const RemoteWork = memo(() => {
    return (
        <section id={'work'} className={styles.remote}>
            <div className={`container`}>
                <Title>Remote Work</Title>
                <Button>hire me</Button>
            </div>
        </section>
    );
});
