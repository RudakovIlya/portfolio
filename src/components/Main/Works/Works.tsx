import Work from "./Work/Work";
import styles from './Works.module.scss'
import {Title} from "../../Title/Title";

export const Works = () => {

    const works = [
        {
            id: 1,
            title: 'Social NetWork',
            img: 'https://kartinkof.club/uploads/posts/2022-03/1648227847_7-kartinkof-club-p-mem-kotik-milii-7.jpg',
            description: 'lorem lorem lorem lorem',
        },
        {
            id: 2,
            title: 'Counter',
            img: 'https://kartinkof.club/uploads/posts/2022-03/1648227847_7-kartinkof-club-p-mem-kotik-milii-7.jpg',
            description: 'lorem lorem lorem lorem',
        },
        {
            id: 3,
            title: 'Redux',
            img: 'https://kartinkof.club/uploads/posts/2022-03/1648227847_7-kartinkof-club-p-mem-kotik-milii-7.jpg',
            description: 'lorem lorem lorem lorem',
        },
        {
            id: 4,
            title: 'React-Shop',
            img: 'https://kartinkof.club/uploads/posts/2022-03/1648227847_7-kartinkof-club-p-mem-kotik-milii-7.jpg',
            description: `lorem lorem lorem lorem`,
        },
        {
            id: 5,
            title: 'React-Shop',
            img: 'https://kartinkof.club/uploads/posts/2022-03/1648227847_7-kartinkof-club-p-mem-kotik-milii-7.jpg',
            description: `lorem lorem lorem lorem`,
        },
        {
            id: 6,
            title: 'Counter',
            img: 'https://kartinkof.club/uploads/posts/2022-03/1648227847_7-kartinkof-club-p-mem-kotik-milii-7.jpg',
            description: 'lorem lorem lorem lorem',
        },
    ]

    const mappedWorks = works.map(work => {
        return (
            <Work key={work.id} work={work}/>
        )
    });

    return (
        <section className={styles.works}>
            <div className={`container`}>
                <Title>My Works</Title>
                <ul className={styles.list}>
                    {mappedWorks}
                </ul>
            </div>
        </section>
    );
}
