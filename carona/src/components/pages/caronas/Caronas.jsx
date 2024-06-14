import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Caronas.module.css'

function Caronas() {
    return (
        <>
            <Sidebar currentPage={window.location.pathname} />
            <p>Caronas</p>
        </>

    )
}

export default Caronas