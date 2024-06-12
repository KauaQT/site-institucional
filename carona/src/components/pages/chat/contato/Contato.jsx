import React from "react";
import styles from "./Contato.module.css";

const Contact = ({ contact, onClick }) => {
  return (
    <>
      <div className={styles["contact"]} onClick={onClick}>
        {/* <img src="" alt="" /> */}
        <div className={styles["message"]}>
          <h3>{contact.name}</h3>
          <span>Av. Paulista, 2000</span>
        </div>
        <div className={styles["notification"]}>2</div>
      </div>
      <div className={styles["divisoria"]}></div>
    </>
  );
};

export default Contact;
