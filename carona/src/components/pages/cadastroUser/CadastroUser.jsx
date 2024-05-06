import styles from "./CadastroUser.module.css";
import Container from "../../layout/container/Container";
import img from "../../../utils/assets/cadastro-image.svg";
import { useState } from "react";
import ActionButton from "../../layout/action_button/ActionButton";
import Input from "../../layout/input/Input";
import { Calendar } from "primereact/calendar";
import { CiCalendar } from "react-icons/ci";

function CadastroUser() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionUser, setSelectedOptionUser] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleOptionUserChange = (option) => {
    setSelectedOptionUser(option);
  };

  const [user, setUser] = useState({});
  function handleUserChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Atualiza o progresso para 100% quando o formulário é enviado
    setProgress(33.3);
  };

  /*  const [perfilMotoristaChecked, setPerfilMotoristaChecked] = useState(false);
  const [perfilPassageiroChecked, setPerfilPassageiroChecked] = useState(false);

  const [masculinoUsuarioChecked, setMasculinoUsuarioChecked] = useState(false);
  const [femininoUsuarioChecked, setFemininoUsuarioChecked] = useState(false);
  const [outroUsuarioChecked, setOutroUsuarioChecked] = useState(false);

  

  function checkPerfil(e) {
    if (e.target.id == "passageiro-div") {
      setPerfilPassageiroChecked(true);
      setPerfilMotoristaChecked(false);
    } else {
      setPerfilMotoristaChecked(true);
      setPerfilPassageiroChecked(false);
    }
  }
*/
  return (
    <Container customClass="min-height">
      {/* div de forms */}
      <div className={styles["div-forms"]}>
        <h1>Foto e Senha</h1>
        <form className={styles["forms"]} onSubmit={handleSubmit}>
          <div className={styles["box-inputs"]}>
            <Input
              type="text"
              placeholder="Digite o nome"
              name="nome"
              label="Nome"
              id="nome"
              onChangeEvent={handleUserChange}
            />

            <div className={styles["sexo-box-input"]}>
              <h4>Sexo</h4>
              <div className={styles["sexo-options"]}>
                <div className={styles["custom-radio-option"]}>
                  <input
                    type="radio"
                    id="masculino"
                    value="masculino"
                    checked={selectedOption === "masculino"}
                    onChange={() => handleOptionChange("masculino")}
                  />
                  <label htmlFor="masculino">Masculino</label>
                </div>
                <div className={styles["custom-radio-option"]}>
                  <input
                    type="radio"
                    id="feminino"
                    value="feminino"
                    checked={selectedOption === "feminino"}
                    onChange={() => handleOptionChange("feminino")}
                  />
                  <label htmlFor="feminino">Feminino</label>
                </div>
                <div className={styles["custom-radio-option"]}>
                  <input
                    type="radio"
                    id="outros"
                    value="outros"
                    checked={selectedOption === "outros"}
                    onChange={() => handleOptionChange("outros")}
                  />
                  <label htmlFor="outros">Outros</label>
                </div>
              </div>
              {/* Adicione mais opções conforme necessário */}
            </div>
            <Input
              type="text"
              placeholder="Digite o email"
              name="email"
              label="Email"
              id="email"
              onChangeEvent={handleUserChange}
            />

            <Input
              type="text"
              placeholder="Digite o CPF"
              name="cpf"
              label="CPF"
              id="cpf"
              onChangeEvent={handleUserChange}
            />

            {/* <Input type='date' placeholder='dd/mm/aaaa' name='dataNascimento' label='Data de Nascimento' id='dataNascimento' onChangeEvent={handleUserChange} /> */}
            <div className={styles["date-box-input"]}>
              <h4>Data de Nascimento</h4>

              <div className={styles["date-input"]}>
                <Calendar
                  placeholder="dd/mm/aaaa"
                  onChange={handleUserChange}
                  dateFormat="dd/mm/yy"
                />

                <CiCalendar />
              </div>
            </div>

            <div className={styles["perfil-box-input"]}>
              <h4>Perfil</h4>
              <div className={styles["perfil-options"]}>
                <div className={styles["custom-radio-option"]}>
                  <input
                    type="radio"
                    id="motorista"
                    value="motorista"
                    checked={selectedOptionUser === "motorista"}
                    onChange={() => handleOptionUserChange("motorista")}
                  />
                  <label htmlFor="motorista">Motorista</label>
                </div>
                <div className={styles["custom-radio-option"]}>
                  <input
                    type="radio"
                    id="passageiro"
                    value="passageiro"
                    checked={selectedOptionUser === "passageiro"}
                    onChange={() => handleOptionUserChange("passageiro")}
                  />
                  <label htmlFor="passageiro">Passageiro</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["grupo-progress"]}>
            <h4>Etapa 1 de 3</h4>
            <div className={styles["progress-container"]}>
              <div
                className={styles["progress-bar"]}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <ActionButton type="primary" label="Próximo" />
        </form>
      </div>
    </Container>
  );
}

export default CadastroUser;
