import styles from './ProcurarCarona.module.css'
import { useLocation } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar"
import { FaArrowRightLong } from "react-icons/fa6";
import { LuCircleDashed } from "react-icons/lu";
import { FaCalendarDays } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from '../../../Api'
import { FaStar } from "react-icons/fa";
import notFound from '../../../utils/assets/image-not-found-viagem.svg'
import AnimacaoEstrada from '../../layout/animacao_estrada/AnimacaoEstrada';
import SearchGeocode from '../../map/search_geocode/SearchGeocode';
import axios from 'axios';

function ProcurarCarona() {
    let local = useLocation();

    const [viagemAPesquisar, setViagemAPesquisar] = useState({
        latitudePartida: '',
        longitudePartida: '',
        latitudeDestino: '',
        longitudeDestino: '',
        diaViagem: '',
    });

    const [viagensEncontradas, setViagensEncontradas] = useState([]);

    const handleSubmitViagem = async () => {
        console.log("Viagem a pesquisar: " + JSON.stringify(viagemAPesquisar));
    
        try {
            const response = await axios.post('http://localhost:8080/viagem/buscar-viagens', viagemAPesquisar);

            console.log("ESSE FDP DO CARALHO DEU RESULTADO" + JSON.stringify(response.data))
            console.log(response.data);
            setViagensEncontradas(response.data);
        } catch (error) {
            console.log(error);
        }
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
                                latitudePartida: place.geometry.coordinates[1], // Correção de coordenadas
                                longitudePartida: place.geometry.coordinates[0] // Correção de coordenadas
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
                                latitudeDestino: place.geometry.coordinates[1], // Correção de coordenadas
                                longitudeDestino: place.geometry.coordinates[0] // Correção de coordenadas
                            })}
                        />

                        <div className={styles["box-input-date"]}>
                            <FaCalendarDays />
                            <input type="date" name="diaViagem" className={styles["inputDate"]} id="dateId" onChange={(e) => setViagemAPesquisar({
                                ...viagemAPesquisar,
                                diaViagem: e.target.value
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
                                <p>viagens</p>
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
