import styles from "./InfoUsuarios.module.css";
import imgMotorista from "../../../utils/assets/imgMotorista.svg";
import imgUsuario from "../../../utils/assets/imgUser.svg";
import iconCheck from "../../../utils/assets/iconCheck.svg";
import wavesTop from "../../../utils/assets/wavesTop.svg";
import wavesBottom from "../../../utils/assets/wavesBottom (2).svg";

function InfoUsers() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["container-motorista"]}>
          <div className={styles["infos-motorista"]}>
            <div className={styles["titulo"]}>
              <h2>O motorista</h2>
            </div>
            <div className={styles["checklist"]}>
              <div className={styles["check"]}>
                <img src={iconCheck} alt="" />
                <span>
                  Cria as caronas, escolhendo horário, local de partida, local
                  de destino e preço
                </span>
              </div>
              <div className={styles["check"]}>
                <img src={iconCheck} alt="" />
                <span>Define suas preferências para as viagens</span>
              </div>
              <div className={styles["check"]}>
                <img src={iconCheck} alt="" />
                <span>Avalia o(s) passageiro(s) após o fim da viagem</span>
              </div>
            </div>
          </div>
          <div className={styles["imagem-motorista"]}>
            <img src={imgMotorista} alt="" />
          </div>
        </div>
        <img src={wavesTop} className={styles["wavesTop"]} alt="" />
        <div className={styles["container-usuario"]}>
          <div className={styles["imagem-usuario"]}>
            <img src={imgUsuario} alt="" />
          </div>
          <div className={styles["infos-usuario"]}>
            <div className={styles["titulo"]}>
              <h2>O Passageiro</h2>
            </div>
            <div className={styles["checklist"]}>
              <div className={styles["check"]}>
                <img src={iconCheck} alt="" />
                <span>
                  Pesquisa e escolhe a carona desejada, com base em preferências
                </span>
              </div>
              <div className={styles["check"]}>
                <img src={iconCheck} alt="" />
                <span>Define suas preferências para as viagens</span>
              </div>
              <div className={styles["check"]}>
                <img src={iconCheck} alt="" />
                <span>Avalia o motorista após o fim da viagem</span>
              </div>
            </div>
          </div>
        </div>
        <img src={wavesBottom} className={styles["wavesBottom"]} alt="" />
      </div>
    </>
  );
}

export default InfoUsers;
