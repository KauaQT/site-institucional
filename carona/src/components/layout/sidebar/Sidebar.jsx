import { FaStar } from "react-icons/fa";
import styles from './Sidebar.module.css'
import logo from "../../../utils/assets/logoCaRona.svg";
import { LuLogOut } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineLoyalty } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";
import { useState } from "react";


function Sidebar({ currentPageName, userType }) {
    const navigate = useNavigate();

    function logout() {
        localStorage.clear()
        navigate("/")
    }

    return (
        <header>
            <img src={logo} className={styles["img-logo"]} alt="Logo CaRona" />

            <div className={styles['box-user']}>
                <div className={styles["user-foto"]}>
                    <img src="" alt="" />
                </div>
                <div className={styles['user-infos']}>
                    <p>Gustavo</p>
                    <div className={styles["box-nota"]}>
                        <FaStar />
                        <span id="user-nota">4.7</span>
                    </div>
                    <p>R$ <span id="user-saldo">46</span></p>
                </div>
            </div>

            <ul className={styles["itens-sidebar"]}>
                <li onClick={() => navigate("/meu-perfil")} className={currentPageName == '/meu-perfil' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
                    <ImProfile />
                    <span>Meu perfil</span>
                </li>
                {userType == "MOTORISTA" ?
                    <li onClick={() => navigate("/oferecer-carona")} className={currentPageName == '/oferecer-carona' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
                        <MdOutlineAddCircle />
                        <span>Oferecer Carona</span>
                    </li>
                    :
                    <li onClick={() => navigate("/procurar-carona")} className={currentPageName == '/procurar-carona' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
                        <FaSearch />
                        <span>Procurar</span>
                    </li>
                }
                <li onClick={() => navigate("/chat")} className={currentPageName == '/chat' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
                    <IoChatbubblesSharp />
                    <span>Chat</span>
                </li>
                <li onClick={() => navigate("/viagens")} className={currentPageName == '/viagens' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
                    <FaMapLocationDot />
                    <span>Viagens</span>
                </li>
                <li onClick={() => navigate("/transacoes")} className={currentPageName == '/transacoes' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
                    <GrTransaction />
                    <span>Transações</span>
                </li>
                <li onClick={() => navigate("/fidelizados")} className={currentPageName == '/fidelizados' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
                    <MdOutlineLoyalty />
                    <span>Fidelizados</span>
                </li>
            </ul>

            <div className={styles["logout"]} onClick={logout}>
                <LuLogOut />
                <span>Sair</span>
            </div>
        </header>
    )
}

export default Sidebar