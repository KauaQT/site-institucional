import Sidebar from "../../layout/sidebar/Sidebar";
import styles from "./Perfil.module.css";
import distanciaIcon from "../../../utils/assets/distanciaIcon.svg";
import transacaoIcon from "../../../utils/assets/transacaoIcon.svg";
import infoIcon from "../../../utils/assets/infoIcon.svg";

function Perfil() {
  return (
    <>
      <Sidebar currentPage={window.location.pathname} />
      <div className={styles["main"]}>
        <div className={styles["metricas"]}>
          <div className={styles["kpis"]}>
            <div className={styles["viagens"]}>
              <img src={distanciaIcon} alt="icon viagens" />
              <div className={styles["registros"]}>
                <span>4</span>
                <span>viagens realizadas</span>
              </div>
            </div>
            <div className={styles["transacoes"]}>
              <img src={transacaoIcon} alt="icon transacoes" />
              <div className={styles["registros"]}>
                <span>4</span>
                <span>Transações realizadas</span>
              </div>
            </div>
          </div>
          <div className={styles["grafico"]}>
            <img src={infoIcon} alt="" />
            <div className={styles["chart"]}></div>
          </div>
        </div>
        <div className={styles["divisoria"]}></div>
        <p className={styles["teste"]}>Perfil</p>
      </div>
    </>
  );
}

export default Perfil;
