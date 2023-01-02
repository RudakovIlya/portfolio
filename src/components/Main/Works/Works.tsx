import React from 'react';
import Work from "./Work";

export const Works = () => {

    const works = [
        {
            id: 1,
            title: 'Social NetWork',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            description: 'lorem lorem lorem lorem',
        },
        {
            id: 2,
            title: 'Counter',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            description: 'lorem lorem lorem lorem',
        }
    ]

    const mappedWorks = works.map(work => {
        return (
            <Work key={work.id} work={work}/>
        )
    });

    return (
        <section>
            <div className={`container`}>
                <h2>My Works</h2>
                <ul>
                    {mappedWorks}
                </ul>
            </div>
        </section>
    );
}
