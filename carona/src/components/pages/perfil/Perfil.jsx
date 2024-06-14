import { useLocation } from "react-router-dom"
import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Perfil.module.css'

function Perfil() {
    let local = useLocation();
    console.log(local.pathname);

    return (
        <>
            <Sidebar currentPageName={local.pathname} userType="MOTORISTA" />
            
            <p>Perfil</p>
        </>

    )
}

export default Perfil