import {FC, PropsWithChildren} from "react";
import styles from './Title.module.scss'

export const Title: FC<PropsWithChildren> = ({children}) => {
    return (
        <h2 className={styles.title}>
            {children}
        </h2>
    );
};