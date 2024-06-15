import React from "react";
import styles from "./Contato.module.css";

const Contact = ({ contact, onClick }) => {
  return (
    <>
      <div className={styles["contact"]} onClick={onClick}>
        <div className={styles["contact-info"]}>
          <div className={styles["user-foto"]}>
            <img src={localStorage.getItem("userProfileImage")} alt="Profile" />
          </div>
          <div className={styles["message"]}>
            <h3>{contact.name}</h3>
            <span>Av. Paulista, 2000</span>
          </div>
        </div>
        <div className={styles["notification"]}>2</div>
      </div>
      <div className={styles["divisoria"]}></div>
    </>
  );
};

export default Contact;
