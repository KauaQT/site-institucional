import { useLocation } from "react-router-dom"
import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Viagens.module.css'
import CardProximaViagem from './card_proxima_viagem/CardProximaViagem'
import CardViagemFeita from './card_viagem_feita/CardViagemFeita'
import { useState } from "react"

function Viagens() {
    let local = useLocation();

    const [viagens, setViagens] = useState([])

    return (
        <>
            <Sidebar currentPageName={local.pathname} />

            <div className={styles["main"]}>
                <div className={styles["container"]}>
                    <div className={styles["container-proxima-viagem"]}>
                        <div className={styles["header-proxima-viagem"]}>
                            <h3>Próxima viagem</h3>
                            <div className={styles["alerta-viagem"]}>
                                <div className={styles["alerta-viagem-circle"]}></div>
                            </div>
                        </div>
                        <CardProximaViagem cidadeOrigem='São Paulo, SP' cidadeDestino={'Campinas, SP'} valor={36} data='17/05/2024' />
                    </div>

                    <div className={styles["line-separator"]}></div>

                    <div className={styles["historico"]}>
                        <div className={styles["historico-header"]}>
                            <h3>Últimas viagens</h3>
                            <div className={styles["historico-header-filtros"]}>
                                <select name="tipoTransacao" id="tipo-transacao" className={styles["box-select"]}>
                                    <option value="todas">Todas</option>
                                    <option value="hoje">Hoje</option>
                                    <option value="ultima-semana">Últimos 7 dias</option>
                                    <option value="ultimo-mes">Último mês</option>
                                </select>

                            </div>
                        </div>

                        <div className={styles["historico-viagens"]}>
                            <CardViagemFeita cidadeOrigem='Campinas, SP' cidadeDestino='São Paulo, SP' valor={40} data='17/05/2024' />

                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Viagens