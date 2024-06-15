import Sidebar from "../../layout/sidebar/Sidebar";
import styles from "./PerfilUser.module.css";
import distanciaIcon from "../../../utils/assets/distanciaIcon.svg";
import transacaoIcon from "../../../utils/assets/transacaoIcon.svg";
import { IoIosInformation } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { IoTime } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";
import { PiSteeringWheelFill } from "react-icons/pi";
import ActionButton from "../../layout/action_button/ActionButton";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function PerfilUser() {
  let local = useLocation();
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    console.log("focus");
    setIsFocused(true);
  };
  const handleBlur = () => {
    console.log("blur");
    setIsFocused(false);
  };
  return (
    <>
      <Sidebar currentPageName={local.pathname} />
      <div className={styles["main"]}>
        <div className={styles["metricas"]}>
          <div className={styles["conjunto-user"]}>
            <h3>Perfil - Gustavo Medeiros</h3>
            <div className={styles["box-user"]}>
              <div className={styles["user-foto"]}>
                <img src={localStorage.getItem("userProfileImage")} alt="" />
              </div>
              <div className={styles["user-infos"]}>
                <p>Motorista</p>
                <span>23 anos</span>
                <div className={styles["box-nota"]}>
                  <FaStar />
                  <span id="user-nota">4.7</span>
                </div>
              </div>
            </div>
            <div className={styles["box-viagens"]}>
              <img src={distanciaIcon} alt="icon viagens" />
              <div className={styles["registros"]}>
                <span>4</span>
                <span>viagens realizadas</span>
              </div>
            </div>
          </div>
          <div className={styles["grafico"]}>
            <IoIosInformation
              className={styles["info"]}
              onMouseOver={handleOnFocus}
              onBlur={handleBlur}
            />
            <div
              className={styles[isFocused ? "visible" : "disabled"]}
              onMouseOut={handleBlur}
            >
              <div className={styles["conjunto-info"]}>
                <IoTime />
                <span>Pontualidade</span>
              </div>
              <div className={styles["conjunto-info"]}>
                <AiFillSafetyCertificate />
                <span>Segurança</span>
              </div>
              <div className={styles["conjunto-info"]}>
                <IoMdChatbubbles />
                <span>Comunicação</span>
              </div>
              <div className={styles["conjunto-info"]}>
                <PiSteeringWheelFill />
                <span>Dirigibilidade</span>
              </div>
            </div>
            <div className={styles["charts"]}>
              <div className={styles["conjunto-chart"]}>
                <div className={styles["chart"]}>
                  <div className={styles["metrica"]}></div>
                </div>
                <IoTime />
              </div>
              <div className={styles["conjunto-chart"]}>
                <div className={styles["chart"]}>
                  <div className={styles["metrica"]}></div>
                </div>
                <AiFillSafetyCertificate />
              </div>
              <div className={styles["conjunto-chart"]}>
                <div className={styles["chart"]}>
                  <div className={styles["metrica"]}></div>
                </div>
                <IoMdChatbubbles />
              </div>
              <div className={styles["conjunto-chart"]}>
                <div className={styles["chart"]}>
                  <div className={styles["metrica"]}></div>
                </div>
                <PiSteeringWheelFill />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["divisoria"]}></div>
        <div className={styles["avaliacoes"]}>
          <span>Avaliações</span>
          <div className={styles["comentario"]}>
            <div className={styles["header"]}>
              <div className={styles["user-infos"]}>
                <div className={styles["user-foto"]}>
                  <img src={localStorage.getItem("userProfileImage")} alt="" />
                </div>
                <p>Ewerton Lima</p>
              </div>
              <div className={styles["box-nota"]}>
                <FaStar />
                <span id="user-nota">4.7</span>
              </div>
            </div>
            <span>Dirige bem, pontual e respeitoso! Recomendo!</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilUser;
