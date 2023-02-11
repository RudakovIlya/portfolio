import React from 'react';
import styles from './Skills.module.scss'
import Skill from "./Skill/Skill";
import {Title} from "../../Title/Title";
import {icons} from './index'


const Skills = () => {

    const skills = [
        {
            skillID: 1,
            title: 'React',
            Icons: icons.react,
            fill: '#61DAFB',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 2,
            title: 'Redux',
            Icons: icons.redux,
            fill: '#764abc',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 3,
            title: 'JavaScript',
            Icons: icons.js,
            fill: '#f5de19',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 4,
            title: 'TypesScript',
            Icons: icons.ts,
            fill: '#007acc',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 5,
            title: 'Axios',
            Icons: icons.axios,
            fill: '#671ddf',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 6,
            title: 'Styled-Components',
            Icons: icons.styled,
            fill: '#ffcebf',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet fugit natus numquam, perspiciatis!'
        },
        {
            skillID: 7,
            title: 'Jest',
            Icons: icons.jest,
            fill: '#c63d14',
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
                <Title>My Skills</Title>
                <ul className={styles.list}>
                    {mappedSkills}
                </ul>
            </div>
        </section>
    );
};

export default Skills;