import styles from './DetalhesViagem.module.css'
import { useLocation, useParams } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar"
import { FaArrowRightLong } from "react-icons/fa6";
import { LuCircleDashed } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from '../../../Api'
import { FaStar } from "react-icons/fa";
import backgroundImage from '../../../utils/assets/procurar-viagem-image.svg'
import carroAndando1 from '../../../utils/assets/carro-andando-1.svg'
import carroAndando2 from '../../../utils/assets/carro-andando-2.svg'
import placaIcon from '../../../utils/assets/license-plate.png'
import { FaCar } from "react-icons/fa";

function DetalhesViagem(props) {
    let local = useLocation();
    const { viagemId } = useParams()

    const [viagem, setViagem] = useState({
        preco: 36,
        data: "17/05/2024",
        horarioSaida: "23:00",
        horarioChegada: "17:00",
        tempoEstimado: "2:00",
        carro: {
            marca: "Ford",
            modelo: "Ka",
            placa: "ABC1D23",
            cor: "red"
        },
        enderecoPartida: {
            logradouro: "Av. Paulista",
            numero: '2000',
            cidade: 'São Paulo',
            uf: 'SP',
            bairro: 'Consolação',
            latitude: '',
            longitude: ''
        },
        enderecoDestino: {
            logradouro: "Av. Ricardo Peixoto",
            numero: '234',
            cidade: 'Campinas',
            uf: 'SP',
            bairro: 'Jardim Brasil',
            latitude: '',
            longitude: ''
        },
        motorista: {
            id: '1',
            nome: "Gustavo Medeiros",
            nota: "4.5"
        },
        passageiros: [
            {
                id: '1',
                nome: "Lucas Arantes",
                nota: "4.7"
            },
            {
                id: '2',
                nome: "Ewerton Lima",
                nota: "4.9"
            }
        ]
    })

    useEffect(() => {
        api.get('/viagens/detalhes/:id')
            .then(res => {
                console.log(res.data);
                setViagem(res.data)
            })
            .catch(error => console.log(error))
    }, [viagemId])

    const reservarViagem = () => {
        console.log('');
    }

    return (
        <>
            <Sidebar currentPageName={local.pathname} />

            <div className={styles["background-image"]}>
                <img src={backgroundImage} alt="Imagem de viagem" className={styles["estrada"]} />
                <img src={carroAndando1} alt="Carro de viagem" className={`${styles["carro"]} ${styles["primeiro"]}`} />
                <img src={carroAndando2} alt="Carro de viagem" className={`${styles["carro"]} ${styles["segundo"]}`} />
            </div>

            <div className={styles["main"]}>
                <div className={styles["container"]}>
                    <div className={styles["search-bar"]}>

                        <div className={styles["box-input"]}>
                            <LuCircleDashed />
                            <input value={`${viagem.enderecoPartida.cidade}, ${viagem.enderecoPartida.uf}`} name="cidadeOrigem" id="partidaId" className={styles["inputPartida"]} disabled />
                        </div>
                        <FaArrowRightLong className={styles["arrow"]} />
                        <div className={styles["box-input"]}>
                            <FaDotCircle />
                            <input value={`${viagem.enderecoDestino.cidade}, ${viagem.enderecoDestino.uf}`} name="cidadeDestino" id="chegadaId" className={styles["inputChegada"]} disabled />
                        </div>
                        <div className={styles["box-input"]}>
                            <FaCalendarDays />
                            <input value={viagem.data} name="data" className={styles["inputDate"]} id="dateId" disabled />
                        </div>

                        <button className={styles["reservar-button"]} onClick={reservarViagem}>Reservar</button>

                    </div>

                    <div className={styles["viagem-quadro"]}>
                        <div className={styles["info"]}>

                            <div className={styles["motorista"]}>
                                <img src="" alt="Foto do Motorista" />
                                <div className={styles["nome-nota"]}>
                                    <h4>{viagem.motorista.nome}</h4>
                                    <div className={styles["nota"]}>
                                        <FaStar />
                                        <span>{viagem.motorista.nota}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles["separator"]}></div>

                            <div className={styles["hora-endereco"]}>
                                <div className={styles["horarios"]}>
                                    <span className={styles["hora-definida"]}>{viagem.horarioSaida}h</span>
                                    <span className={styles["tempo-estimado"]}>{viagem.tempoEstimado}h</span>
                                    <span className={styles["hora-definida"]}>{viagem.horarioChegada}h</span>
                                </div>
                                <div className={styles["enderecos"]}>
                                    <span>{viagem.enderecoDestino.logradouro}, {viagem.enderecoDestino.numero}</span>
                                    <span>{viagem.enderecoPartida.logradouro}, {viagem.enderecoPartida.numero}</span>
                                </div>
                            </div>

                            <div className={styles["separator"]}></div>

                            <div className={styles["info-carro"]}>
                                <div className={styles["modelo-carro"]}>
                                    <FaCar style={{ color: viagem.carro.cor }} />
                                    <span>{viagem.carro.marca} {viagem.carro.modelo}</span>
                                </div>
                                <div className={styles["placa-carro"]}>
                                    <img src={placaIcon} alt="Ícone de placa" />
                                    <span>{viagem.carro.placa}</span>
                                </div>
                            </div>

                            <div className={styles["separator"]}></div>

                            <div className={styles["passageiros"]}>
                                <h5>Passageiros</h5>
                                <div className={styles["users"]}>
                                    <div className={styles["user"]}>
                                        <img src="" alt="Foto do passageiro" />
                                        <div className={styles["nome-nota"]}>
                                            <h5>{viagem.passageiros[0].nome}</h5>
                                            <div className={styles["nota-passageiro"]}>
                                                <FaStar />
                                                <span>{viagem.passageiros[0].nota}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles["user"]}>
                                        <img src="" alt="Foto do passageiro" />
                                        <div className={styles["nome-nota"]}>
                                            <h5>{viagem.passageiros[1].nome}</h5>
                                            <div className={styles["nota-passageiro"]}>
                                                <FaStar />
                                                <span>{viagem.passageiros[1].nota}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles["mapa"]}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalhesViagem