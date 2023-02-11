import {FC} from 'react';
import {IconType} from "react-icons";

interface IMyInfo {
    link: string
    Icon: IconType
}

export const MyInfo: FC<IMyInfo> = ({Icon, link}) => {
    const currentLink = link.includes('@gmail.com') ? 'mailto:' : link.includes('988') ? 'tel:' : link
    return (
        <li key={link}>
            <a rel="noreferrer" target={'_blank'} href={`${currentLink}${link}`}>
                <Icon size={30}/><span>{link.includes('wiki') ? 'Krasnodar, Russia' : link}</span>
            </a>
        </li>
    );
};
