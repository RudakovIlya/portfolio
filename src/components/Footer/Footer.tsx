import styles from './Footer.module.scss'

export const Footer = () => {

    const footerInfo = [
        {
            id: 1,
            title: 'GitHub',
            icon: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
            link: 'https://github.com/RudakovIlya'
        },
        {
            id: 2,
            title: 'Codewars',
            icon: 'data:image/png;base64,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',
            link: 'https://www.codewars.com/users/rsschool_fa52ce3af42956ba'
        },
        {
            id: 3,
            title: 'Linkedin',
            icon: 'https://as2.ftcdn.net/v2/jpg/03/96/56/19/1000_F_396561934_t1OwjMZHrVY211bHA5uUEAix0F1SyLci.jpg',
            link: ''
        },
        {
            id: 4,
            title: 'Telegram',
            icon: 'https://static-00.iconduck.com/assets.00/telegram-icon-512x512-z8lb0qsx.png',
            link: 'https://t.me/Asap_Alh'
        },
    ]

    return (
        <footer className={styles.footer}>
            <div className={`container`}>
                <h2 className={styles.title}>Rudakov Ilya</h2>
                <ul className={styles.list}>
                    {
                        footerInfo.map(item => {
                            return (
                                <li key={item.id} className={styles.item}>
                                    <a href={item.link}>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className={styles.copy}>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};
