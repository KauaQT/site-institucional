import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Transacoes.module.css'
import { useState } from "react"
import CardTransacao from "./transacao_card/CardTransacao"
import SaldoCard from "./saldo_card/SaldoCard"
import { useLocation } from "react-router-dom"

function Transacoes() {
    let local = useLocation();

    const [transacoes, setTransacoes] = useState([])

    return (
        <>
            <Sidebar currentPageName={local.pathname} />

            <div className={styles["main"]}>
                <div className={styles["container"]}>
                    <SaldoCard saldoUser='46,00' />

                    <div className={styles["line-separator"]}></div>

                    <div className={styles["historico"]}>
                        <div className={styles["historico-header"]}>
                            <h3>Últimas transações</h3>
                            <div className={styles["historico-header-filtros"]}>
                                <select name="tipoTransacao" id="tipo-transacao" className={styles["box-select"]}>
                                    <option value="todas">Todas</option>
                                    <option value="viagem">Viagem</option>
                                    <option value="deposito">Depósito</option>
                                    <option value="saque">Saque</option>
                                </select>

                                <select name="tipoTransacao" id="tipo-transacao" className={styles["box-select"]}>
                                    <option value="todas">Todas</option>
                                    <option value="hoje">Hoje</option>
                                    <option value="ultima-semana">Últimos 7 dias</option>
                                    <option value="ultimo-mes">Último mês</option>
                                </select>

                            </div>
                        </div>

                        <div className={styles["historico-transacoes"]}>
                            <CardTransacao data='17/04/2024' tipo='Viagem' valor={36} />
                            <CardTransacao data='17/04/2024' tipo='Viagem' valor={36} />
                            
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Transacoes