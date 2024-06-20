import { useState } from 'react';
import styles from './CardViagem.module.css';
import { FaCar, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function CardViagem({ fotoUser, nomeUser, notaUser, horarioPartida, horarioChegada, preco, distanciaPartida, distanciaDestino, onClickEvent }) {
    const [chegadaIsFocused, setChegadaIsFocused] = useState(false);
    const [destinoIsFocused, setDestinoIsFocused] = useState(false);

    const getCarColor = (distance) => {
        if (distance <= 3) {
            return 'perto';
        } else if (distance > 3 && distance <= 10) {
            return 'medio';
        } else {
            return 'longe';
        }
    };

    const carColorPartida = getCarColor(distanciaPartida);
    const carColorDestino = getCarColor(distanciaDestino);

    return (
        <div className={styles["card"]}>
            <div className={styles["infos-motorista"]}>
                <img src={fotoUser} alt={"Foto de " + nomeUser} />
                <div className={styles["nome-nota"]}>
                    <h4>{nomeUser}</h4>
                    <div className={styles["nota-user"]}>
                        <FaStar />
                        <span>{notaUser}</span>
                    </div>
                </div>
            </div>

            <div className={styles["line-separator"]}></div>

            <div className={styles["info-viagem"]}>
                <div className={styles["horarios-indicadores"]}>
                    <div className={styles["horarios"]}>
                        <div className={styles["horario"]}>
                            <FaLocationDot />
                            <span>{horarioPartida}h</span>
                        </div>

                        <div className={styles["dashed-line"]}></div>

                        <div className={styles["horario"]}>
                            <FaLocationDot />
                            <span>{horarioChegada}h</span>
                        </div>
                    </div>

                    <div className={styles["carros-indicadores"]}>
                        <div
                            className={styles["carros"]}
                            onMouseOver={() => setChegadaIsFocused(true)}
                            onMouseLeave={() => setChegadaIsFocused(false)}
                        >
                            {
                                chegadaIsFocused &&
                                <div
                                    className={`${styles["aviso-proximidade"]} ${styles["left"]}`}
                                >
                                    <h4>Ponto de Partida</h4>
                                    <div className={styles["carro"]}>
                                        <FaCar className={styles[carColorPartida]} />
                                        <span>{carColorPartida.charAt(0).toUpperCase() + carColorPartida.slice(1)}</span>
                                    </div>
                                    <p><span>{distanciaPartida} km</span> de distância</p>
                                </div>
                            }

                            <FaCar className={carColorPartida === 'perto' ? styles['perto'] : ''} />
                            <FaCar className={carColorPartida === 'medio' ? styles['medio'] : ''} />
                            <FaCar className={carColorPartida === 'longe' ? styles['longe'] : ''} />
                        </div>
                        <div
                            className={styles["carros"]}
                            onMouseOver={() => setDestinoIsFocused(true)}
                            onMouseLeave={() => setDestinoIsFocused(false)}
                        >
                            {
                                destinoIsFocused &&
                                <div
                                    className={`${styles["aviso-proximidade"]} ${styles["right"]}`}
                                >
                                    <h4>Ponto de Destino</h4>
                                    <div className={styles["carro"]}>
                                        <FaCar className={styles[carColorDestino]} />
                                        <span>{carColorDestino.charAt(0).toUpperCase() + carColorDestino.slice(1)}</span>
                                    </div>
                                    <p><span>{distanciaDestino} km</span> de distância</p>
                                </div>
                            }

                            <FaCar className={carColorDestino === 'perto' ? styles['perto'] : ''} />
                            <FaCar className={carColorDestino === 'medio' ? styles['medio'] : ''} />
                            <FaCar className={carColorDestino === 'longe' ? styles['longe'] : ''} />
                        </div>
                    </div>
                </div>

                <div className={styles["preco-action-button"]}>
                    <span>R$ <span>{preco}</span></span>

                    <button
                        onClick={onClickEvent}
                    >
                        Reservar
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CardViagem;
