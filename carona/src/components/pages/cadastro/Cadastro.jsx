import styles from "./Cadastro.module.css";
import Container from "../../layout/container/Container";
import img from "../../../utils/assets/cadastro-image.svg";
import { useState } from "react";
import ActionButton from "../../layout/action_button/ActionButton";
import CadastroEndereco from "../cadastroEndereco/CadastroEndereco";
import CadastroPessoal from "../cadastroPessoal/CadastroPessoal";
import CadastroUser from "../cadastroUser/CadastroUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cadastro() {
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleClick = () => {
    if (currentComponent === 3) {
      toast.success("cadastro realizado com sucesso!");
    } else {
      setCurrentComponent((current) => (current % 3) + 1);
    }
  };

  const backHandleClick = () => {
    if (currentComponent === 1) {
      toast.error("prossiga com o cadastro");
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
