import styles from './Main.module.scss'

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={`container ${styles.container}`}>
                <section className={styles.intro}>
                    <span>Hi, there!</span>
                    <h1>My name Ilya Rudakov.</h1>
                    <p>I'm frontend developer</p>
                </section>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </main>
    );
};

export default Main;