import React, { useState } from "react";
import ContactList from "../lista_contatos/ListaContatos";
import Chat from "../Chat";
import styles from "./ChatContainer.module.css";
import "../../../layout/sidebar/Sidebar";
import Sidebar from "../../../layout/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const ChatContainer = () => {
  //Parte para integração
  // const [contacts, setContacts] = useState([]);
  // const [selectedContact, setSelectedContact] = useState(null);

  // useEffect(() => {
  //   fetchContacts();
  // }, []);

  // const fetchContacts = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/api/contacts');
  //     setContacts(response.data);
  //   } catch (error) {
  //     console.error('Erro ao buscar contatos:', error);
  //   }
  // };

  // const handleContactClick = (contact) => {
  //   setSelectedContact(contact);
  // };

  let local = useLocation();

  const defaultContacts = [
    { id: 1, name: "Ewerton Lima" },
    { id: 2, name: "Lucas Arantes" },
  ];

  const [contacts] = useState(defaultContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <>
      <Sidebar currentPageName={local.pathname} />
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
