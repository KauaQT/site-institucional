import styles from "./InfoSistema.module.css";
import iconSeguranca from "../../../utils/assets/iconSeguranca.svg";
import iconFeedback from "../../../utils/assets/iconFeedback.svg";
import iconPagamento from "../../../utils/assets/iconPagamento.svg";

function InfoSistema() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["conjunto"]}>
          <img src={iconSeguranca} alt="" />
          <span>
            Segurança é nossa prioridade. Com perfis verificados, Seguro CaRona,
            pagamento pela plataforma e um filtro cuidadoso de usuários você
            viaja com <span className={styles["destaque"]}>tranquilidade!</span>
          </span>
        </div>
        <div className={styles["conjunto"]}>
          <img src={iconFeedback} alt="" />
          <span>
            Sua opinião é importante! Avalie seu motorista ou passageiro e nos
            ajude a construir uma comunidade de caronas cada vez melhor, com{" "}
            <span className={styles["destaque"]}>transparência</span>.
          </span>
        </div>
        <div className={styles["conjunto"]}>
          <img src={iconPagamento} alt="" />
          <span>
            Aqui você realiza transações seguras com sistema de pagamento
            integrado, seguro abrangente e suporte sempre disponível. Tudo na
            plataforma para sua{" "}
            <span className={styles["destaque"]}>tranquilidade</span>.
          </span>
        </div>
      </div>
    </>
  );
}

export default InfoSistema;
