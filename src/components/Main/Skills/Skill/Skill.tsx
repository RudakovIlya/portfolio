import React, {FC} from 'react';
import styles from "./Skill.module.scss";

type SkillType = {
    skillID: number,
    title: string,
    img: string,
    description: string
}

type SkillPropsType = {
    skill: SkillType
}

const Skill: FC<SkillPropsType> = ({skill}) => {

    const {img, title, description} = skill

    return (
        <li className={styles.skill}>
            <div className={styles.inner}>
                <div className={styles.square}>
                    <img src={img} alt={title}/>
                </div>
                <h3>{title}</h3>
                {description}
            </div>

        </li>
    );
};

export default Skill;