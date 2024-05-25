import { useLocation } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './ProcurarCarona.module.css'

function ProcurarCarona() {
    let local = useLocation();

    return (
        <>
            <Sidebar currentPageName={local.pathname} />
            <p>Procurar Carona</p>
        </>

    )
}

export default ProcurarCarona