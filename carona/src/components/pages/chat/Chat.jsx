import React, { useState, useEffect } from "react";
import Message from "./mensagens/Message";
import styles from "./Chat.module.css";
import { FaArrowUp } from "react-icons/fa6";

const Chat = ({ selectedContact }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const imageUrl = `https://res.cloudinary.com/dkzjrifqn/image/upload/k3xzen0rgeoq9v05lhcb`;

  useEffect(() => {
    if (selectedContact) {
      const defaultMessages = [
        { content: "Bom dia! Tudo bem?", isSentByCurrentUser: false },
        {
          content: "Olá, bom dia! Tudo bem e você?",
          isSentByCurrentUser: true,
        },
      ];
      setMessages(defaultMessages);
    } else {
      setMessages([]);
    }
  }, [selectedContact]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const newMsg = {
      content: newMessage,
      isSentByCurrentUser: true,
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!selectedContact) {
    return (
      <div className={styles["chat-empty"]}>
        <img src={imageUrl} alt="chatImage" />
        <span>Clique em uma conversa para exibir as mensagens</span>
      </div>
    );
  }

  return (
    <div className={styles["chat"]}>
      <h2>{selectedContact.name}</h2>
      <div className={styles["messages-container"]}>
        {messages.length === 0 ? (
          <p className={styles["no-messages"]}>
            Inicie uma conversa com {selectedContact.name}
          </p>
        ) : (
          messages.map((msg, index) => (
            <Message
              key={index}
              content={msg.content}
              isSentByCurrentUser={msg.isSentByCurrentUser}
            />
          ))
        )}
      </div>
      <div className={styles["input-container"]}>
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <FaArrowUp onClick={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
//Parte para integração
// const Chat = () => {
  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState('');

  // useEffect(() => {
  //   if (selectedContact) {
  //     fetchMessages(selectedContact.id);
  //   }
  // }, [selectedContact]);

  // const fetchMessages = async (contactId) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/api/messages?contactId=${contactId}`);
  //     setMessages(response.data);
  //   } catch (error) {
  //     console.error('Erro ao buscar mensagens:', error);
  //   }
  // };

  // const sendMessage = async () => {
  //   if (newMessage.trim() === '') return;
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/messages', {
  //       content: newMessage,
  //       contactId: selectedContact.id,
  //       isSentByCurrentUser: true,
  //     });
  //     setMessages([...messages, response.data]);
  //     setNewMessage('');
  //   } catch (error) {
  //     console.error('Erro ao enviar mensagem:', error);
  //   }
  // };

// import { useLocation } from "react-router-dom";
// import Sidebar from "../../layout/sidebar/Sidebar";
// c
// import { useState } from "react";

// function Chat() {
//   let local = useLocation();
//   const [viewConversation, setviewConversation] = useState(false)

//   function handleChange() {
//     setviewConversation(true)
//   }

//   return (
//     <>
//       <Sidebar currentPageName={local.pathname} />
//       <div className={styles["main"]}>
//         <div className={styles["box"]}>
//           <div className={styles["left-side"]}>
//             <div className={styles["header"]}>
//               <h2>Conversas</h2>
//             </div>
//             <div className={styles["conversas"]}>
//               <div className={styles["chat"]} onClick={handleChange}>
//                 <img src="" alt="" />
//                 <div className={styles["message"]}>
//                   <h3>Ewerton Lima</h3>
//                   <span>Av. Paulista, 2000</span>
//                 </div>
//                 <div className={styles["notification"]}>2</div>
//               </div>
//               <div className={styles["divisoria"]}></div>
//             </div>
//           </div>
//           <div className={styles["right-side"]}>
//             {/* <img src="" alt="" /> */}
//             <span>Clique em uma conversa para exibir as mensagens</span>
//             <p onChange={viewConversation}>teste</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Chat;
