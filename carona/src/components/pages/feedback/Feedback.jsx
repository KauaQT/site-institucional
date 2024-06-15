import styles from "./Feedback.module.css";
import Sidebar from "../../layout/sidebar/Sidebar";
import { LuCircleDashed } from "react-icons/lu";
import { FaDotCircle, FaStar, FaRegStar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from '../../../Api'

function Feedback() {
  const navigate = useNavigate()
  const { userId } = useParams(1)
  // const userId = sessionStorage.getItem('idUser')
  const tipoUser = 'MOTORISTA'
  // const tipoUser = sessionStorage.getItem('tipoUser')

  const [feedback, setFeedback] = useState({
    notaUser: 0,
    notaPontualidade: 0,
    notaComunicacao: 0,
    notaDirigibilidade: null,
    notaComportamento: null,
    notaSeguranca: 0,
    comentario: '',
    idUser: userId,
    idAvaliado: 0
  })

  const viagem = {
    usuario: {
      id: 1,
      tipo: "MOTORISTA",
      nome: "Gustavo Medeiros"
    },
    cidadeOrigem: 'São Paulo',
    cidadeDestino: 'Campinas',
    dataHora: '17/05/2024 13:00',
  };

  const handleCancelFeedback = () => {
    navigate(`/viagens/${userId}`)
  }

  const handleSaveFeedback = async () => {
    console.log(feedback);

    // const response = await api.post(`/feedback/criar-feedback/${viagem.usuario.id}`)
    // .then((res) => {
    //   console.log(res.data);
    //   navigate('/viage')
    // })
    // .catch((error => {
    //   console.log(error)
    // }))
  }

  let valoresStars = [1, 2, 3, 4, 5]

  return (
    <>
      <Sidebar currentPageName={'/viagens'} userType={"MOTORISTA"} />

      <div className={styles["main"]}>
        <div className={styles["container"]}>
          {tipoUser == "MOTORISTA" ? (
            <h3>Avaliar Passageiro</h3>
          ) : (
            <h3>Avaliar Motorista</h3>
          )}

          <div className={styles["container-feedback"]}>
            <div className={styles["viagem-info"]}>
              <h4>Informações da Viagem</h4>

              <div className={styles["icon-info"]}>
                <LuCircleDashed />
                <span id="cidade-origem">{viagem.cidadeOrigem}</span>
              </div>

              <div className={styles["icon-info"]}>
                <FaDotCircle />
                <span id="cidade-destino">{viagem.cidadeDestino}</span>
              </div>

              <div className={styles["icon-info"]}>
                <FaCalendarDays />
                <span id="data-hora">{viagem.dataHora}</span>
              </div>
            </div>

            <div className={styles["avaliacoes-comentario"]}>
              <div className={styles["user-comentario"]}>

                <div className={styles["user-avaliacao"]}>
                  <img src="" alt="Foto do Motorista" />
                  <div className={styles["nome-nota"]}>
                    <h3>{viagem.usuario.nome}</h3>
                    <div className={styles["nota"]}>
                      {
                        valoresStars.map(starValue => (
                          <span
                            key={starValue}
                            onClick={() => setFeedback({ ...feedback, notaUser: starValue })}
                          >
                            {
                              starValue <= feedback.notaUser
                                ? <FaStar />
                                : <FaRegStar />
                            }
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>

                <div className={styles["comentario"]}>
                  <h4>Comentário</h4>
                  <input type="text" onChange={(e) => setFeedback({ ...feedback, comentario: e.target.value })} placeholder={`Comente sobre sua experiência com ${viagem.usuario.nome}...`} />
                </div>
              </div>

              <div className={styles["criterios-avaliacao"]}>
                <div className={styles["criterio"]}>
                  <h4>Pontualidade</h4>
                  <div className={styles["estrelas"]}>
                    {
                      valoresStars.map(starValue => (
                        <span
                          key={starValue}
                          onClick={() => setFeedback({ ...feedback, notaPontualidade: starValue })}
                        >
                          {
                            starValue <= feedback.notaPontualidade
                              ? <FaStar />
                              : <FaRegStar />
                          }
                        </span>
                      ))
                    }
                  </div>
                </div>

                <div className={styles["criterio"]}>
                  <h4>Comunicação</h4>
                  <div className={styles["estrelas"]}>
                    {
                      valoresStars.map(starValue => (
                        <span
                          key={starValue}
                          onClick={() => setFeedback({ ...feedback, notaComunicacao: starValue })}
                        >
                          {
                            starValue <= feedback.notaComunicacao
                              ? <FaStar />
                              : <FaRegStar />
                          }
                        </span>
                      ))
                    }
                  </div>
                </div>

                {
                  tipoUser == 'MOTORISTA'
                    ? <div className={styles["criterio"]}>
                      <h4>Comportamento</h4>
                      <div className={styles["estrelas"]}>
                        {
                          valoresStars.map(starValue => (
                            <span
                              key={starValue}
                              onClick={() => setFeedback({ ...feedback, notaComportamento: starValue })}
                            >
                              {
                                starValue <= feedback.notaComportamento
                                  ? <FaStar />
                                  : <FaRegStar />
                              }
                            </span>
                          ))
                        }
                      </div>
                    </div>
                    : <div className={styles["criterio"]}>
                      <h4>Dirigibilidade</h4>
                      <div className={styles["estrelas"]}>
                        {
                          valoresStars.map(starValue => (
                            <span
                              key={starValue}
                              onClick={() => setFeedback({ ...feedback, notaDirigibilidade: starValue })}
                            >
                              {
                                starValue <= feedback.notaDirigibilidade
                                  ? <FaStar />
                                  : <FaRegStar />
                              }
                            </span>
                          ))
                        }
                      </div>
                    </div>
                }


                <div className={styles["criterio"]}>
                  <h4>Segurança</h4>
                  <div className={styles["estrelas"]}>
                    {
                      valoresStars.map(starValue => (
                        <span
                          key={starValue}
                          onClick={() => setFeedback({ ...feedback, notaSeguranca: starValue })}
                        >
                          {
                            starValue <= feedback.notaSeguranca
                              ? <FaStar />
                              : <FaRegStar />
                          }
                        </span>
                      ))
                    }
                  </div>
                </div>


              </div>
            </div>

            <div className={styles["action-buttons"]}>
              <button
                className={styles["cancelar-button"]}
                onClick={handleCancelFeedback}
              >
                Cancelar
              </button>
              <button
                className={styles["finalizar-button"]}
                onClick={handleSaveFeedback}
              >
                Finalizar
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Feedback;
