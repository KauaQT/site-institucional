import { useLocation } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Fidelizados.module.css'

function Fidelizados() {
    let local = useLocation();

    return (
        <>
            <Sidebar currentPageName={local.pathname} />
            <p>Fidelizados</p>
        </>

    )
}

export default Fidelizados