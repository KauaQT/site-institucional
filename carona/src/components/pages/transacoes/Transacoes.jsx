import Sidebar from "../../layout/sidebar/Sidebar"
import styles from './Transacoes.module.css'
import { useEffect, useState } from "react"
import CardTransacao from "./transacao_card/CardTransacao"
import SaldoCard from "./saldo_card/SaldoCard"
import { useLocation, useParams } from "react-router-dom"
import notFound from '../../../utils/assets/image-not-found-viagem.svg'
import api from "../../../Api"

function Transacoes() {
    let local = useLocation();

    const { idUser } = useParams()

    const [transacoes, setTransacoes] = useState([{
        tipoTransacao: "Viagem",
        preco: 36,
        dataHora: '17/05/2024 13:00',
    }])

    useEffect(() => {
        api.get(`transacoes/${idUser}`)
            .then(res => {
                console.log(res);
                setTransacoes(res.data)
            })
            .catch(error => console.log(error))
    }, [idUser])

    const handleDetalhesTransacao = (id) => {

    }

    const handleComprovanteTransacao = (id) => {

    }

    return (
        <>
            <Sidebar currentPageName={local.pathname} />

            <div className={styles["main"]}>
                <div className={styles["container"]}>
                    <div className={styles["container-saldo-user"]}>
                        <SaldoCard saldoUser='46,00' />
                    </div>

                    <div className={styles["line-separator"]}></div>

                    <div className={styles["historico"]}>
                        <div className={styles["historico-header"]}>
                            <h3>Últimas transações</h3>
                            <div className={styles["historico-header-filtros"]}>
                                <div className={styles["box-filtro"]}>
                                    <span>Tipo de transação</span>
                                    <select name="tipoTransacao" id="tipo-transacao" className={styles["box-select"]}>
                                        <option value="todas">Todas</option>
                                        <option value="viagem">Viagem</option>
                                        <option value="deposito">Depósito</option>
                                        <option value="saque">Saque</option>
                                    </select>
                                </div>

                                <div className={styles["box-filtro"]}>
                                    <span>Data</span>
                                    <select name="tipoTransacao" id="tipo-transacao" className={styles["box-select"]}>
                                        <option value="sempre">Sempre</option>
                                        <option value="hoje">Hoje</option>
                                        <option value="ultima-semana">Últimos 7 dias</option>
                                        <option value="ultimo-mes">Último mês</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        <div className={styles["historico-transacoes"]}>
                            {
                                transacoes.length > 0 ?
                                    transacoes.map((transacao) => (
                                        <CardTransacao data={transacao.dataHora} tipo={transacao.tipoTransacao} valor={transacao.preco} onComprovanteClick={() => handleComprovanteTransacao(transacao.id)} onDetalhesClick={() => handleComprovanteTransacao(transacao.id)} />
                                    ))
                                    :
                                    <div className={styles["not-to-show"]}>
                                        <h4>Nenhuma transação para exibir</h4>
                                        <img src={notFound} alt="Imagem de nenhuma transação encontrada" />
                                    </div>
                            }
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Transacoes