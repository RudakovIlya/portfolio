import {memo} from 'react';
import {skills} from './index'
import {Skill} from "./Skill/Skill";
import styles from './Skills.module.scss'
import {Title} from "../../Title/Title";


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