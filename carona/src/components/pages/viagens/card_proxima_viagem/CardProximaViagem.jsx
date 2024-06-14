import styles from './CardProximaViagem.module.css'
import image from '../../../../utils/assets/image-proxima-viagem.svg'
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";

function CardProximaViagem({ cidadeOrigem, cidadeDestino, valor, data, onDetalhesClick, onCancelarClick }) {
    return (
        <div className={styles["box-proxima-viagem"]}>
            <div className={styles["viagem-img"]}>
                <img src={image} alt="Imagem de Viagem" />
            </div>

            <span className={styles["column-separator"]}></span>

            <div className={styles["viagem-info"]}>
                <div className={styles["cidade-info"]}>
                    <LuCircleDashed />
                    <span id="cidade-origem">{cidadeOrigem}</span>
                </div>

                <div className={styles["cidade-info"]}>
                    <FaRegCircle />
                    <span id="cidade-destino">{cidadeDestino}</span>
                </div>

                <span>R$ <span id="valor-viagem">{valor}</span></span>
                <span id="data-viagem">{data}</span>
            </div>

            <div className={styles["viagem-actions"]}>
                <button className={styles["button-detalhes"]} onClick={onDetalhesClick} >Detalhes</button>
                <button className={styles["button-cancelar"]} onClick={onCancelarClick} >Cancelar</button>
            </div>
        </div>
    )
}

export default CardProximaViagem