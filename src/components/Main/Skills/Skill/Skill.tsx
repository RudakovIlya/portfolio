import React, {FC} from 'react';
import styles from "./Skill.module.scss";
import {IconType} from "react-icons";

type SkillType = {
    skillID: number,
    title: string,
    Icons: IconType,
    description: string
    fill: string
}

type SkillPropsType = {
    skill: SkillType
}

const Skill: FC<SkillPropsType> = ({skill}) => {

    const {Icons, title, description, fill} = skill

    return (
        <li className={styles.skill}>
            <div className={styles.inner}>
                <div className={styles.square}>
                    <Icons size={50} color={fill}/>
                </div>
                <h3>{title}</h3>
                {description}
            </div>

        </li>
    );
};

export default Skill;