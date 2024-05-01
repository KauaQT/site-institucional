import { Link } from "react-router-dom";
import styles from "./SimulatorNav.module.css";
import iconPartida from "../../../utils/assets/partidaIcon.svg"
import iconSeta from "../../../utils/assets/setaIcon.svg"
import iconChegada from "../../../utils/assets/chegadaIcon.svg"
import iconDate from "../../../utils/assets/dateIcon.svg"

function SimulatorNav() {
    return (
      <div className={styles["main"]}>
        <div className={styles["partida"]}>
            <img src={iconPartida} className={styles["iconPartida"]} alt="" />
            <input type="text" name="" id="partidaId" className={styles["inputPartida"]} placeholder="partida"/>
        </div>
        <div className={styles["seta"]}>
            <img src={iconSeta} alt="" className={styles["iconSeta"]}/>
        </div>
        <div className={styles["chegada"]}>
            <img src={iconChegada} className={styles["iconChegada"]} alt="" />
            <input type="text" name="" id="chegadaId" className={styles["inputChegada"]} placeholder="chegada"/>
        </div>
        <div className={styles["date"]}>
            <img src={iconDate} className={styles["iconDate"]} alt="" />
            <input type="date" name="" className={styles["inputDate"]} id="dateId" />
        </div>
        <Link to= 'login'>
        <button className={styles["botao"]}>Caronas</button>
        </Link>
      </div>
    );
  }
  
  export default SimulatorNav;
