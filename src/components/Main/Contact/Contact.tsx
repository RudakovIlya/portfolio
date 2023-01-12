import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form action="#" className={styles.form}>
                    <input className={styles.input} type="text"/>
                    <input className={styles.input} type="text"/>
                    <textarea className={styles.textarea} name="" id=""></textarea>
                </form>
                <button className={styles.button}>Send</button>
            </div>
        </section>
    );
};

export default Contact;