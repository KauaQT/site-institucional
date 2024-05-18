import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Perfil.module.css'

function Perfil() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Perfil</p>
        </>

    )
}

export default Perfil