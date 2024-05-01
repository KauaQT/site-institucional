import { Link } from "react-router-dom";
import styles from "./SimulatorCard.module.css";
import estrela from "../../../utils/assets/estrela.svg";
import locationIcon from "../../../utils/assets/locationIcon.svg";
import greenCar from "../../../utils/assets/greenCar.svg";
import redCar from "../../../utils/assets/redCar.svg";
import yellowCar from "../../../utils/assets/yellowCar.svg";
import grayCar from "../../../utils/assets/grayCar.svg";
import client from "../../../utils/assets/client.svg";

function SimulatorCard() {
  return (
    <div className={styles["container"]}>
      <div className={styles["card"]} id="card1">
        <div className={styles["motorista-info"]}>
          <div className={styles["username-photo"]}>
            <img src={client} alt="" />
            <span>Gustavo Medeiros</span>
          </div>
          <div className={styles["nota-info"]}>
            <span>4.3</span>
            <img src={estrela} alt="" />
          </div>
        </div>
        <div className={styles["divisoria"]}></div>
        <div className={styles["ride-info"]}>
          <div className={styles["time-info"]}>
            <div className={styles["time"]}>
              <img src={locationIcon} alt="" />
              <span>15:00h</span>
            </div>
            <div className={styles["distance-cars"]}>
              <img src={greenCar} alt="" />
              <img src={grayCar} alt="" />
              <img src={grayCar} alt="" />
            </div>
          </div>
          <div className={styles["div"]}></div>
          <div className={styles["time-info"]}>
            <div className={styles["time"]}>
              <img src={locationIcon} alt="" />
              <span>17:00h</span>
            </div>
            <div className={styles["distance-cars"]}>
              <img src={grayCar} alt="" />
              <img src={grayCar} alt="" />
              <img src={redCar} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["reservar"]}>
          <div className={styles["valor"]}>
            <span>R$ 30,00</span>
          </div>
          <Link>
            <button className={styles["botao"]}>Reservar</button>
          </Link>
        </div>
      </div>
      <div className={styles["card"]} id="card2">
        <div className={styles["motorista-info"]}>
          <div className={styles["username-photo"]}>
            <img src={client} alt="" />
            <span>Lucas Arantes</span>
          </div>
          <div className={styles["nota-info"]}>
            <span>4.8</span>
            <img src={estrela} alt="" />
          </div>
        </div>
        <div className={styles["divisoria"]}></div>
        <div className={styles["ride-info"]}>
          <div className={styles["time-info"]}>
            <div className={styles["time"]}>
              <img src={locationIcon} alt="" />
              <span>16:30h</span>
            </div>
            <div className={styles["distance-cars"]}>
              <img src={grayCar} alt="" />
              <img src={yellowCar} alt="" />
              <img src={grayCar} alt="" />
            </div>
          </div>
          <div className={styles["div"]}></div>
          <div className={styles["time-info"]}>
            <div className={styles["time"]}>
              <img src={locationIcon} alt="" />
              <span>18:30h</span>
            </div>
            <div className={styles["distance-cars"]}>
              <img src={greenCar} alt="" />
              <img src={grayCar} alt="" />
              <img src={grayCar} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["reservar"]}>
          <div className={styles["valor"]}>
            <span>R$ 36,00</span>
          </div>
          <Link>
            <button className={styles["botao"]}>Reservar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SimulatorCard;
