import React, { useState } from "react";
import Container from "../../layout/container/Container";
import styles from "./CadastroPessoal.module.css";
import Input from "../../layout/input/Input";
import InputMask from "react-input-mask";

function CadastroPessoal({ handleUserEvent }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionUser, setSelectedOptionUser] = useState(null);
  const [progress, setProgress] = useState(33.3);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    handleUserEvent({ target: { name: "sexo", value: option } });
  };

  const handleOptionUserChange = (option) => {
    setSelectedOptionUser(option);
    handleUserEvent({ target: { name: "perfil", value: option } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(100);
  };

  return (
    <Container customClass="min-height">
      {/* div de forms */}
      <div className={styles["div-forms"]}>
        <h1>Dados Pessoais</h1>
        <form className={styles["forms"]} onSubmit={handleSubmit}>
          <div className={styles["box-inputs"]}>
            <Input
              type="text"
              placeholder="Digite o nome"
              name="nome"
              label="Nome"
              id="nome"
              onChangeEvent={handleUserEvent}
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
            </div>

            <Input
              type="text"
              placeholder="Digite o email"
              name="email"
              label="Email"
              id="email"
              onChangeEvent={handleUserEvent}
            />
            
            <Input
              type="text"
              placeholder="Digite o CPF"
              name="cpf"
              label="CPF"
              id="cpf"
              onChangeEvent={handleUserEvent}
            />

            <Input
              type="date"
              placeholder="dd/mm/aaaa"
              onChangeEvent={handleUserEvent}
              name="dataNascimento"
              label="Data de Nascimento"
              id="dataNascimento"
            />

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
          {/* <ActionButton type="primary" label="Próximo" /> */}
        </form>
      </div>
    </Container>
  );
}

export default CadastroPessoal;
