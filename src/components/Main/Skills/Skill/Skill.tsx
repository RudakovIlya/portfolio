import React, {FC} from 'react';
import styles from "./Skill.module.scss";
import {IconType} from "react-icons";

type SkillType = {
    skillID: number,
    title: string,
    Icons: IconType,
    fill: string
}

type SkillPropsType = {
    skill: SkillType
}

const Skill: FC<SkillPropsType> = ({skill}) => {

    const {Icons, title, fill} = skill

    return (
        <li className={styles.skill}>
            <div className={styles.inner}>
                <div className={styles.square}>
                    <Icons size={50} color={fill}/>
                </div>
                <h3 className={styles.title}>{title}</h3>
            </div>

        </li>
    );
};

export default Skill;