import styles from './SaldoCard.module.css'
import image from '../../../../utils/assets/carteira.svg'

function SaldoCard({saldoUser}) {
    return (
        <div className={styles["box-saldo"]}>
            <div className={styles["saldo-img"]}>
                <img src={image} alt="Image de Carteira" />
            </div>

            <span className={styles["column-separator"]}></span>

            <div className={styles["saldo-info"]}>
                <h3>Saldo</h3>
                <h3>R$ <span id="user-saldo">{saldoUser}</span></h3>
            </div>

            <div className={styles["saldo-actions"]}>
                <button className={styles["button-sacar"]}>Sacar</button>
                <button className={styles["button-depositar"]}>Depositar</button>
            </div>
        </div>
    )
}

export default SaldoCard