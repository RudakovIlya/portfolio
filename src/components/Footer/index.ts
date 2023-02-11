import {BsGithub, BsTelegram, BsLinkedin} from "react-icons/bs";
import {SiCodewars} from "react-icons/si";

const icons = {
    github: BsGithub,
    codewars: SiCodewars,
    telegram: BsTelegram,
    link: BsLinkedin
}

export const footer = [
    {
        id: 1,
        Icon: icons.codewars,
        link: 'https://www.codewars.com/users/rsschool_fa52ce3af42956ba',
        fill: '#bb432c'
    },
    {
        id: 2,
        Icon: icons.github,
        link: 'https://github.com/RudakovIlya',
        fill: '#000000'
    },
    {
        id: 3,
        Icon: icons.telegram,
        link: 'https://t.me/Asap_Alh',
        fill: '#0088cc'
    },
    {
        id: 4,
        Icon: icons.link,
        link: 'https://www.linkedin.com/in/ilya-rudakov-14b10a214/',
        fill: '#0077b5'
    }
]