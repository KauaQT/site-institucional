import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './OferecerCarona.module.css'

function OferecerCarona() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Oferecer Carona</p>
        </>

    )
}

export default OferecerCarona