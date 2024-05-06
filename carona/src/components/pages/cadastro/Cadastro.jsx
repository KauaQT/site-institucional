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
  const [user, setUser] = useState({});
  
  function handleUserChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  return (
    <Container customClass="min-height">
      {/* div de imagem*/}
      <div className={styles["main"]}>
        <div className={styles["div-illustration"]}>
          <h1>Cadastro</h1>
          <img src={img} alt="login-imagem" />
        </div>
        {/* <CadastroPessoal className={styles["cadastro"]} handleUserEvent={handleUserChange} /> */}
        <CadastroEndereco className={styles["cadastro"]} />
        {/* <CadastroUser /> */}
      </div>
    </Container>
  );
}

export default Cadastro;
