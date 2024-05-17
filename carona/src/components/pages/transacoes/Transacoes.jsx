import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Transacoes.module.css'

function Transacoes() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Transações</p>
        </>

    )
}

export default Transacoes