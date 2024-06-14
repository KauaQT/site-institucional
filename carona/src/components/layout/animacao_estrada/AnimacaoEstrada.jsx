import backgroundImage from '../../../utils/assets/procurar-viagem-image.svg'
import carroAndando1 from '../../../utils/assets/carro-andando-1.svg'
import carroAndando2 from '../../../utils/assets/carro-andando-2.svg'
import styles from './AnimacaoEstrada.module.css'

function AnimacaoEstrada() {
    return (
        <div className={styles["background-image"]}>
            <img src={backgroundImage} alt="Imagem de viagem" className={styles["estrada"]} />
            <img src={carroAndando1} alt="Carro de viagem" className={`${styles["carro"]} ${styles["primeiro"]}`} />
            <img src={carroAndando2} alt="Carro de viagem" className={`${styles["carro"]} ${styles["segundo"]}`} />
        </div>
    )
}

export default AnimacaoEstrada