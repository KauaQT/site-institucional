import styles from './Home.module.css'
import img from '../../../utils/assets/home illustration.svg'
import SimulatorNav from '../../layout/ride_simulator_nav/SimulatorNav'
import SimulatorCard from '../../layout/ride_simulator_card/SimulatorCard'
import Slider from '../../layout/slider/Slider'
import InfoUsers from '../../layout/info_users/InfoUsuarios'
import InfoSistema from '../../layout/info_sistema/InfoSistema'
import Footer from '../../layout/footer/Footer'

function Home() {
    return (
        <div className={styles["container"]}>
            <div className={styles["imagem"]}>
                <img src={img} alt="imagem Home" />
            </div>
            <SimulatorNav />
            <SimulatorCard />
            <Slider />
            <InfoUsers />
            <InfoSistema />
            <Footer />
        </div>
    )
}

export default Home