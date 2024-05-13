import styles from "./Cadastro.module.css";
import Container from "../../layout/container/Container";
import img from "../../../utils/assets/cadastro-image.svg";
import { useState } from "react";
import ActionButton from "../../layout/action_button/ActionButton";
import Input from "../../layout/input/Input";
import { Calendar } from "primereact/calendar";
import { CiCalendar } from "react-icons/ci";
import CadastroEndereco from "../cadastroEndereco/CadastroEndereco";
import CadastroPessoal from "../cadastroPessoal/CadastroPessoal";
import CadastroUser from "../cadastroUser/CadastroUser";

function Cadastro() {
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleClick = () => {
    if (currentComponent === 3) {
      alert("Cadastro realizado com sucesso");
    } else {
      setCurrentComponent((current) => (current % 3) + 1);
    }
  };

  const backHandleClick = () => {
    if (currentComponent === 1) {
      alert("prossiga com o cadastro");
    } else {
      setCurrentComponent((current) => current - 1);
    }
  };

  return (
    <Container customClass="min-height">
      {/* div de imagem*/}
      <div className={styles["main"]}>
        <div className={styles["div-illustration"]}>
          <h1>Cadastro</h1>
          <img src={img} alt="login-imagem" />
        </div>
        <div className={styles["grupo-cadastro"]}>
          {currentComponent === 1 && <CadastroPessoal />}
          {currentComponent === 2 && <CadastroEndereco />}
          {currentComponent === 3 && <CadastroUser />}
          <div className={styles["botoes"]}>
            <ActionButton
              onClickEvent={backHandleClick}
              type="secondary"
              label="Voltar"
            />
            <ActionButton
              onClickEvent={handleClick}
              type="primary"
              label="Próximo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cadastro;
