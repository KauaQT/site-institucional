import { useLocation } from "react-router-dom"
import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Chat.module.css'

function Chat() {
    let local = useLocation()

    return (
        <>
            <Sidebar currentPageName={local.pathname} />
            <p>Chat</p>
        </>

    )
}

export default Chat