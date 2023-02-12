import {ElementType, FC, PropsWithChildren} from 'react';
import styles from './Button.module.scss'

interface IButton<As extends ElementType> {
    as?: As
    type?: 'button' | 'submit' | 'reset'
    href?: string
    onClick?: () => void
    target?: string
}

export const Button: FC<IButton<'button' | 'a'> & PropsWithChildren> = ({
                                                                            as ,
                                                                            onClick,
                                                                            children,
                                                                            type = 'button',
                                                                            href,
                                                                            target,
                                                                            ...props
                                                                        }) => {
    const Component = as || 'button';
    return (
        <Component {...props} target={target} href={href} type={type} className={`${styles.btn} ${styles.btn1}`}
                   onClick={onClick}>
            <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            {children}
        </Component>
    );
};
