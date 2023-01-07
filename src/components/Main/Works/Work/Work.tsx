import {FC} from 'react';
import styles from './Work.module.scss'

type WorkType = {
    id: number
    title: string
    img: string
    description: string
}

type WorkPropsType = {
    work: WorkType
}


const Work: FC<WorkPropsType> = ({work}) => {
    const {description, title, img} = work
    return (
        <li className={styles.item}>
            <div className={styles['item-wrapper']}>
                <div className={styles.top}>
                    <div className={styles['image-wrapper']}>
                        <img className={styles.image} src={img} alt={`project: ${title}`}/>
                        <div className={styles.link}>
                            <div>Света спасибо за проверку!!!</div>
                            <a href="">Demo</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </li>
    );
};

export default Work;