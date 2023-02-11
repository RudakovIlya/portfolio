import {useEffect} from 'react';
import {MdOutlineBrightness6} from "react-icons/md";
import useLocalStorage from "../../utils/useLocalStorage";
import styles from './index.module.scss'

export const ButtonSwitcher = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const onClick = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <button className={styles.button} onClick={onClick}>
            <MdOutlineBrightness6 color={theme === 'dark' ? '#1A1718' : '#FAF7F8'} size={30}/>
        </button>
    );
};
