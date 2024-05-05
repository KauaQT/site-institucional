import styles from "./Footer.module.css";
import iconYoutube from "../../../utils/assets/iconYoutube.svg";
import iconFacebook from "../../../utils/assets/iconFacebook.svg";
import iconInstagram from "../../../utils/assets/iconInstagram.svg";
import iconLinkedin from "../../../utils/assets/iconLinkedin.svg";
import logo from "../../../utils/assets/logoCaRona.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles["container"]}>
          <img src={logo} alt="" />
          <div className={styles["infos"]}>
            <div className={styles["pags"]}>
              <span>Caronas</span>
              <span>Vantagens</span>
              <span>Segura CaRona</span>
            </div>
            <div className={styles["pags"]}>
              <span>Quem Somos</span>
              <span>Contato</span>
              <span>Central de ajuda</span>
            </div>
          </div>
          <div className={styles["redes"]}>
            <img src={iconInstagram} alt="" />
            <img src={iconFacebook} alt="" />
            <img src={iconLinkedin} alt="" />
            <img src={iconYoutube} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
