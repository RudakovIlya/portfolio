import styles from "./Contact.module.scss";
import {Title} from "../../Title/Title";
import {contacts} from "./index";
import {MyInfo} from "./MyInfo";

export const Contact = () => {

    const contactsItems = contacts.map((contact) => {
        return <MyInfo key={contact.link} {...contact}/>
    })

    return (
        <section id={'contact'} className={styles.contact}>
            <div className={`container ${styles.container}`}>
                <Title>Contacts</Title>
                <div className={styles.forms}>
                    <ul className={styles.list}>
                        {contactsItems}
                    </ul>
                    <form action="#" className={styles.form}>
                        <input placeholder={'Name'} className={`${styles.field}`} type="text"/>
                        <input placeholder={'Email'} className={`${styles.field}`} type="email"/>
                        <textarea className={`${styles.textarea} ${styles.field}`} name="" id=""></textarea>
                        <button type={'submit'} className={styles.button}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
