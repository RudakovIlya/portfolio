import React from 'react';
import styles from './Skills.module.scss'
import Skill from "./Skill/Skill";

const Skills = () => {

    const skills = [
        {
            skillID: 1,
            title: 'JS',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 2,
            title: 'CSS',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 3,
            title: 'HTML',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 4,
            title: 'React',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 5,
            title: 'Redux',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 6,
            title: 'Formik',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
    ]

    const mappedSkills = skills.map(skill => {
        return (
            <Skill key={skill.skillID} skill={skill}/>
        )
    })

    return (
        <section className={styles.skills}>
            <div className={`container`}>
                <h2 className={styles.title}>My Skills</h2>
                <ul className={styles.list}>
                    {mappedSkills}
                </ul>
            </div>
        </section>
    );
};

export default Skills;