import React, {memo} from 'react';
import styles from './Skills.module.scss'
import Skill from "./Skill/Skill";
import {Title} from "../../Title/Title";
import {skills} from './index'


export const Skills = memo(() => {

    const mappedSkills = skills.map(skill => {
        return (
            <Skill key={skill.skillID} skill={skill}/>
        )
    })

    return (
        <section id={'skills'} className={styles.skills}>
            <div className={`container`}>
                <Title>My Skills</Title>
                <ul className={styles.list}>
                    {mappedSkills}
                </ul>
            </div>
        </section>
    );
});