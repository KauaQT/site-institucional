import { FaStar } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import logo from "../../../utils/assets/logoCaRona.svg";
import { LuLogOut } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineLoyalty } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import imgUser from '../../../utils/assets/user-image.png'

function Sidebar({ currentPageName }) {
  const navigate = useNavigate();

  // const tipoUser = localStorage.getItem('tipoUser');
  // const nomeUser = localStorage.getItem('nomeUser');
  // const notaUser = localStorage.getItem('notaUser');
  const tipoUser = 'MOTORISTA';
  const nomeUser = 'Gustavo';
  const notaUser = '4.7';

  const { idUser } = useParams()

  function logout() {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <header>
      <img src={logo} className={styles["img-logo"]} alt="Logo CaRona" />

      <div className={styles["box-user"]}>
        <div className={styles["user-foto"]}>
          <img src={localStorage.getItem("userProfileImage") ? localStorage.getItem("userProfileImage") : imgUser} alt="Profile" />
        </div>
        <div className={styles["user-infos"]}>
          <p>{nomeUser}</p>
          <div className={styles["box-nota"]}>
            <FaStar />
            <span id="user-nota">{notaUser}</span>
          </div>
        </div>
      </div>

      <ul className={styles["itens-sidebar"]} style={{height: tipoUser == 'MOTORISTA' ? '332px' : '280px'}}>
        <li onClick={() => navigate("/meu-perfil")} className={currentPageName == '/meu-perfil' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
          <ImProfile />
          <span>Meu perfil</span>
        </li>
        {tipoUser == "MOTORISTA" ?
          <li onClick={() => navigate("/viagens/oferecer")} className={currentPageName == '/viagens/oferecer' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
            <MdOutlineAddCircle />
            <span>Oferecer Carona</span>
          </li>
          :
          <li onClick={() => navigate("/viagens/procurar")} className={currentPageName == '/viagens/procurar' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
            <FaSearch />
            <span>Procurar</span>
          </li>
        }
        <li onClick={() => navigate("/chat")} className={currentPageName == '/chat' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
          <IoChatbubblesSharp />
          <span>Chat</span>
        </li>
        <li onClick={() => navigate(`/viagens/${idUser}`)} className={currentPageName == '/viagens' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
          <FaMapLocationDot />
          <span>Viagens</span>
        </li>
        <li onClick={() => navigate(`/transacoes/${idUser}`)} className={currentPageName == '/transacoes' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
          <GrTransaction />
          <span>Transações</span>
        </li>
        { tipoUser == 'MOTORISTA' &&
          <li onClick={() => navigate(`/fidelizados/${idUser}`)} className={currentPageName == '/fidelizados' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
          <MdOutlineLoyalty />
          <span>Fidelizados</span>
        </li>}
        {
          tipoUser == 'MOTORISTA' &&
          <li onClick={() => navigate(`/carros/${idUser}`)} className={currentPageName == '/carros' ? `${styles["item"]} ${styles["current-page"]}` : styles["item"]}>
            <FaCar />
            <span>Carros</span>
          </li>
        }
      </ul>

      <div className={styles["logout"]} onClick={logout}>
        <LuLogOut />
        <span>Sair</span>
      </div>
    </header>
  );
}

export default Sidebar;
