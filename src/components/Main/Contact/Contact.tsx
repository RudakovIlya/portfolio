import styles from "./Contact.module.scss";
import {Title} from "../../Title/Title";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={`container ${styles.container}`}>
                <Title>Contacts</Title>
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