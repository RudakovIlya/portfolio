import {FaReact} from "react-icons/fa";
import {
    SiJavascript,
    SiJest,
    SiMaterialui,
    SiRedux,
    SiSass,
    SiStorybook,
    SiStyledcomponents,
    SiTypescript
} from "react-icons/si";
import {CgArrowsExchangeV} from "react-icons/cg";
import {TbApi} from "react-icons/tb";
import {GrTest} from "react-icons/gr";

const icons = {
    react: FaReact,
    redux: SiRedux,
    js: SiJavascript,
    ts: SiTypescript,
    axios: CgArrowsExchangeV,
    styled: SiStyledcomponents,
    jest: SiJest,
    sass: SiSass,
    api: TbApi,
    story: SiStorybook,
    mui: SiMaterialui,
    unit: GrTest
};

export const skills = [
    {
        skillID: 1,
        title: 'React',
        Icons: icons.react,
        fill: '#61DAFB',
    },
    {
        skillID: 2,
        title: 'Redux',
        Icons: icons.redux,
        fill: '#764abc',
    },
    {
        skillID: 3,
        title: 'JavaScript',
        Icons: icons.js,
        fill: '#f5de19',
    },
    {
        skillID: 4,
        title: 'TypesScript',
        Icons: icons.ts,
        fill: '#007acc',
    },
    {
        skillID: 5,
        title: 'Axios',
        Icons: icons.axios,
        fill: '#671ddf',
    },
    {
        skillID: 6,
        title: 'Jest',
        Icons: icons.jest,
        fill: '#c63d14',
    },
    {
        skillID: 7,
        title: 'SASS-SCSS',
        Icons: icons.sass,
        fill: '#bf4080',
    },
    {
        skillID: 8,
        title: 'Rest-API',
        Icons: icons.api,
        fill: '#f9004d',
    },
    {
        skillID: 9,
        title: 'Styled-Components',
        Icons: icons.styled,
        fill: '#ffcebf',
    },
    {
        skillID: 10,
        title: 'StoryBook',
        Icons: icons.story,
        fill: '#FF4785',
    },
    {
        skillID: 11,
        title: 'MUI',
        Icons: icons.mui,
        fill: '#007FFF',
    },
    {
        skillID: 12,
        title: 'Unit-tests',
        Icons: icons.unit,
        fill: '#66bb6a',
    },
]