import styles from './CardPassageiro.module.css'
import { FaStar } from "react-icons/fa";

function CardPassageiro({ foto, nome, nota }) {
    return (
        <div className={styles["user"]}>
            <div className={styles["box-image"]}>
                <img src={foto} alt="Foto do passageiro" />
            </div>

            <div className={styles["nome-nota"]}>
                <h5>{nome}</h5>
                <div className={styles["nota-passageiro"]}>
                    <FaStar />
                    <span>{nota}</span>
                </div>
            </div>
        </div>
    )
}

export default CardPassageiro