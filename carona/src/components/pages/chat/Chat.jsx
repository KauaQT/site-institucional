import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Chat.module.css'

function Chat() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Chat</p>
        </>

    )
}

export default Chat