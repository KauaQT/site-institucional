import styles from './ProcurarCarona.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar"
import { FaArrowRightLong } from "react-icons/fa6";
import { LuCircleDashed } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from '../../../Api'
import notFound from '../../../utils/assets/image-not-found-viagem.svg'
import AnimacaoEstrada from '../../layout/animacao_estrada/AnimacaoEstrada';
import SearchGeocode from '../../map/search_geocode/SearchGeocode';
import CardViagem from './card_viagem/CardViagem';

function ProcurarCarona() {
    let local = useLocation();

    const navigate = useNavigate()

    const [viagemAPesquisar, setViagemAPesquisar] = useState({
        latitudePartida: '',
        longitudePartida: '',
        latitudeDestino: '',
        longitudeDestino: '',
        data: '',
    })

    const [viagensEncontradas, setViagensEncontradas] = useState(['a'])

    const handleSubmitViagem = async () => {
        console.log(viagemAPesquisar)

        // const response = await api.post('/buscar-viagens', viagemAPesquisar)

        // .then((res) => {
        //     console.log(res.data);
        //     setViagensEncontradas(res.data)
        // })
        // .catch((error) => console.log(error))
    }

    return (
        <>
            <Sidebar currentPageName={local.pathname} />

            <AnimacaoEstrada />

            <div className={styles["main"]}>
                <div className={styles["container"]}>
                    <div className={styles["search-bar"]}>

                        <SearchGeocode
                            placeholder='Partida'
                            startIcon={<LuCircleDashed />}
                            name='cidadeOrigem'
                            className={styles["box-input"]}
                            onClickEvent={(place) => setViagemAPesquisar({
                                ...viagemAPesquisar,
                                latitudePartida: place.geometry.coordinates[0],
                                longitudePartida: place.geometry.coordinates[1]
                            })}
                        />

                        <FaArrowRightLong className={styles["arrow"]} />

                        <SearchGeocode
                            placeholder='Chegada'
                            startIcon={<FaDotCircle />}
                            name='cidadeDestino'
                            className={styles["box-input"]}
                            onClickEvent={(place) => setViagemAPesquisar({
                                ...viagemAPesquisar,
                                latitudeDestino: place.geometry.coordinates[0],
                                longitudeDestino: place.geometry.coordinates[1]
                            })}
                        />

                        <div className={styles["box-input-date"]}>
                            <FaCalendarDays />
                            <input type="date" name="data" className={styles["inputDate"]} id="dateId" onChange={(e) => setViagemAPesquisar({
                                ...viagemAPesquisar,
                                data: e.target.value
                            })} />
                        </div>

                        <button
                            className={styles["search-button"]}
                            onClick={handleSubmitViagem}
                        >
                            Ver caronas
                        </button>

                    </div>

                    {
                        viagensEncontradas.length > 0 &&
                        <div className={styles["filtros"]}>
                            <div className={styles["box-filtro"]}>
                                <span>Ordenar por</span>
                                <select name="ordenarPor" id="ordenar" className={styles["box-select"]} >
                                    <option value="proximidade">Proximidade</option>
                                    <option value="preço">Preço</option>
                                    <option value="avaliação">Avaliação</option>
                                </select>
                            </div>

                            <div className={styles["box-filtro"]}>
                                <span>Passageiros</span>
                                <select name="qtdPassageiros" id="qtd-passageiros" className={styles["box-select"]} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            {/* <div className={styles["box-filtro"]}>
                                <span>Avaliação</span>
                                <select name="avaliacao" id="avaliacao" className={styles["box-select"]} >
                                    <option value="">{opcoesAvaliacao[0]}</option>
                                    <option value="">{opcoesAvaliacao[1]}</option>
                                    <option value="">{opcoesAvaliacao[2]}</option>
                                    <option value="">{opcoesAvaliacao[3]}</option>
                                    <option value="">{opcoesAvaliacao[4]}</option>
                                </select>
                            </div> */}

                            <div className={styles["box-filtro"]}>
                                <span>Apenas mulheres</span>
                                <select name="apenasMulheres" id="apenas-mulheres" className={styles["box-select"]} >
                                    <option value={true}>Sim</option>
                                    <option value={false}>Não</option>
                                </select>
                            </div>
                        </div>
                    }

                    {
                        viagensEncontradas.length > 0
                            ? <div className={styles["viagens"]}>
                                <CardViagem
                                    nomeUser={'Gustavo Medeiros'}
                                    notaUser={4.7}
                                    horarioPartida={"17:00"}
                                    horarioChegada={"19:00"}
                                    preco={30}
                                    onClickEvent={() => navigate(`/viagens/detalhes/`)}
                                />
                                <CardViagem
                                    nomeUser={'Gustavo Medeiros'}
                                    notaUser={4.7}
                                    horarioPartida={"17:00"}
                                    horarioChegada={"19:00"}
                                    preco={30}
                                    onClickEvent={() => navigate(`/viagens/detalhes/`)}
                                />
                            </div>
                            : <div className={styles["not-to-show"]}>
                                <h4>Nenhuma viagem para mostrar</h4>
                                <img src={notFound} alt="Nenhuma viagem encontrada" />
                            </div>
                    }
                </div>
            </div>
        </>

    )
}

export default ProcurarCarona