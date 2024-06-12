import React, { useState } from "react";
import ContactList from "../lista_contatos/ListaContatos";
import Chat from "../Chat";
import styles from "./ChatContainer.module.css";
import "../../../layout/sidebar/Sidebar";
import Sidebar from "../../../layout/sidebar/Sidebar";

const ChatContainer = () => {
  const defaultContacts = [
    { id: 1, name: "Ewerton Lima" },
    { id: 2, name: "Lucas Arantes" },
    { id: 3, name: "Kaiky Cruz" },
  ];

  const [contacts] = useState(defaultContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <>
      <Sidebar />
      <div className={styles["main"]}>
        <div className={styles["box"]}>
          <ContactList
            contacts={contacts}
            onContactClick={handleContactClick}
          />
          <Chat selectedContact={selectedContact} />
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
