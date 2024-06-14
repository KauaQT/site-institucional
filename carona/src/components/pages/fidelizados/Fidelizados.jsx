import { useLocation } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Fidelizados.module.css'
import { useState } from "react";
import notFound from '../../../utils/assets/image-not-found-viagem.svg'
import FidelizadoCard from './fidelizado_card/FidelizadoCard'

function Fidelizados() {
    let local = useLocation();

    const [fidelizados, setFidelizados] = useState([
        {
            nome: "Gustavo Medeiros",
            idade: "21 anos",
            viagemJuntos: "5"
        },
        {
            nome: "Gustavo Medeiros",
            idade: "21 anos",
            viagemJuntos: "5"
        },
    ])

    return (
        <>
            <Sidebar currentPageName={local.pathname} />
            <div className={styles["main"]}>
                <div className={styles["container"]}>
                    <h3>Passageiros fidelizados</h3>

                    {
                        fidelizados.length > 0
                            ? <div className={styles["fidelizados"]}>
                                {
                                    fidelizados.map((fidelizado) => (
                                        <FidelizadoCard nome={fidelizado.nome} idade={fidelizado.idade} totalViagens={fidelizado.viagemJuntos} />
                                    ))
                                }
                            </div>
                            : <div className={styles["not-found"]}>
                                <h4>Não há passageiro(s) fidelizado(s)</h4>
                                <img src={notFound} alt="Nenhum fidelizado encontrado" />
                            </div>
                    }

                </div>
            </div>
        </>

    )
}

export default Fidelizados