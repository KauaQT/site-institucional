import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './ProcurarCarona.module.css'

function ProcurarCarona() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Procurar Carona</p>
        </>

    )
}

export default ProcurarCarona