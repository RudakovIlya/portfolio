import React from 'react';
import styles from './Skills.module.scss'
import Skill from "./Skill/Skill";

const Skills = () => {

    const skills = [
        {
            skillID: 1,
            title: 'JS',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 2,
            title: 'CSS',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 3,
            title: 'HTML',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 4,
            title: 'React',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 5,
            title: 'Redux',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 6,
            title: 'Formik',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
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