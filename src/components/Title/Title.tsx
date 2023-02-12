import {FC, memo, PropsWithChildren} from "react";
import styles from './Title.module.scss'

export const Title: FC<PropsWithChildren> = memo(({children}) => {
    return (
        <h2 className={styles.title}>
            {children}
        </h2>
    );
});