import React from "react";
import "./Message.module.css";

const Message = ({ content, isSentByCurrentUser }) => {
  return (
    <div className={`message ${isSentByCurrentUser ? "sent" : "received"}`}>
      <span>{content}</span>
    </div>
  );
};

export default Message;
