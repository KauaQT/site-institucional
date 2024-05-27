import { useLocation } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './OferecerCarona.module.css'

function OferecerCarona() {
    let local = useLocation();

    return (
        <>
            <Sidebar currentPageName={local.pathname} userType={'MOTORISTA'} />
            <p>Oferecer Carona</p>
        </>

    )
}

export default OferecerCarona