import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Viagens.module.css'

function Viagens() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Viagens</p>
        </>

    )
}

export default Viagens