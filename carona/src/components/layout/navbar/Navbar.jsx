import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Container from "../container/Container";
import styles from "./Navbar.module.css";
import logo from "../../../utils/assets/logoCaRona.svg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["conjunto-logo"]}>
        <img src={logo} className={styles["img-logo"]} alt="Logo CaRona" />
      </div>
      <Container>
        <ul>
          <li>
            <Link>Como funciona</Link>
          </li>
          <li>
            <Link>Vantagens</Link>
          </li>
          <li>
            <Link>Motorista</Link>
          </li>
          <li>
            <Link>Passageiro</Link>
          </li>
          <li id="procurar" className={styles["conjunto-busca"]}>
            <FaSearch className={styles["icon-procurar"]} />
            <Link className={styles["procurar"]}>Procurar</Link>
          </li>
        </ul>
        <Link to='meu-perfil'>
          <FaUserCircle className={styles["icon-user"]} />
        </Link>
      </Container>
    </nav>
  );
}

export default Navbar;
