import React, {FC} from 'react';

type WorkType = {
    id: number
    title: string
    img: string
    description: string
}

type WorkPropsType = {
    work: WorkType
}

const Work: FC<WorkPropsType> = ({work}) => {
    const {description, title, img} = work
    return (
        <li>

        </li>
    );
};

export default Work;