import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Fidelizados.module.css'

function Fidelizados() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Fidelizados</p>
        </>

    )
}

export default Fidelizados