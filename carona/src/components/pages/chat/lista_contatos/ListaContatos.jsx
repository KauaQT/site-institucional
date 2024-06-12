import React from "react";
import Contact from "../contato/Contato";
import styles from "./ListaContatos.module.css";

const ContactList = ({ contacts, onContactClick }) => {
  return (
    <div className={styles["left-side"]}>
      <div className={styles["header"]}>
        <h2>Conversas</h2>
      </div>
      <div className={styles["conversas"]}>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            contact={contact}
            onClick={() => onContactClick(contact)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
