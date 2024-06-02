import styles from './CardTransacao.module.css'
import image from '../../../../utils/assets/transacao.svg'
import { IoMdDownload } from "react-icons/io";

function CardTransacao({data, valor, tipo, onDetalhesClick, onComprovanteClick}) {
    return (
        <div className={styles["box-transacao"]}>
            <div className={styles["transacao-img"]}>
                <img src={image} alt="Imagem de Transação" />
            </div>

            <span className={styles["column-separator"]}></span>

            <div className={styles["transacao-info"]}>
                <span id="tipo-transacao">{tipo}</span>
                <span>R$ <span id="valor-transacao">{valor}</span></span>
                <span id="data-transacao">{data}</span>
            </div>

            <div className={styles["transacao-actions"]}>
                <button className={styles["button-comprovante"]} onClick={onComprovanteClick}>
                    <IoMdDownload />
                    Comprovante
                </button>
                <button className={styles["button-detalhes"]} onClick={onDetalhesClick}>
                    Detalhes
                </button>
            </div>
        </div>
    )
}

export default CardTransacao