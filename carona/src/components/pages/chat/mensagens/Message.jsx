import React from "react";
import styles from "./Message.module.css";

const Message = ({ content, isSentByCurrentUser }) => {
  return (
    <div className={styles[`${isSentByCurrentUser ? "sent" : "received"}`]}>
      <span>{content}</span>
    </div>
  );
};

export default Message;
