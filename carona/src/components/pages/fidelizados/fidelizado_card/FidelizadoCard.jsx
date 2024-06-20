import styles from './FidelizadoCard.module.css'
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import imgUser from '../../../../utils/assets/user-image.png'

function FidelizadoCard({ nome, idade, totalViagens, foto, onRemoveClick, onConversarClick }) {
    return (
        <div className={styles["box-fidelizado"]}>

            <img src={foto ? foto : imgUser} alt="Imagem de Fidelizado" />

            <div className={styles["fidelizado-info"]}>
                <h4 id="nome-fidelizado">{nome}</h4>
                <span id="idade-fidelizado">{idade}</span>
                <span id="total-viagens">{totalViagens} viagens realizadas juntos</span>
            </div>

            <div className={styles["fidelizado-actions"]}>
                <button
                 className={styles["button-conversar"]} 
                 onClick={onConversarClick}
                 >
                    <IoChatbubblesSharp />
                    <span>Conversar</span>
                </button>
                <button
                 className={styles["button-remover"]} 
                 onClick={onRemoveClick}
                 >
                    <FaTrashAlt />
                    <span>Remover</span>
                </button>
            </div>
        </div>
    )
}

export default FidelizadoCard