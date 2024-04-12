import styles from './Home.module.css'
import img from '../../../utils/assets/home illustration.svg'

function Home() {
    return (
        <div className={styles["container"]}>
            <div className={styles["imagem"]}>
                <img src={img} className={styles["img"]}alt="imagem Home" />
            </div>
        </div>
    )
}

export default Home