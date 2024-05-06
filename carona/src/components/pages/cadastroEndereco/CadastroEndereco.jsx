import styles from "./CadastroEndereco.module.css";
import Container from "../../layout/container/Container";
import { useState } from "react";
import ActionButton from "../../layout/action_button/ActionButton";
import Input from "../../layout/input/Input";
import { FaSearch } from "react-icons/fa";

import axios from "axios";

function CadastroEndereco() {
  const [progress, setProgress] = useState(66.6);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState();
  const [error, setError] = useState();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${encodeURIComponent(cep)}/json/`
      );
      setAddress(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("CEP não encontrado");
      setAddress(null);
    }
  };

  const handleInputChange = (e) => {
    setCep(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Atualiza o progresso para 100% quando o formulário é enviado
    setProgress(66.6);
  };

  console.log(`https://viacep.com.br/ws/${cep}/json/`);

  return (
    <Container customClass="min-height">
      {/* div de imagem*/}

      {/* div de forms */}
      <div className={styles["div-forms"]}>
        <h1>Endereço</h1>
        {error && <p>{error}</p>}
        <form className={styles["forms"]} onSubmit={handleSubmit}>
          <div className={styles["box-inputs"]}>
            <div className={styles["busca-cep"]}>
              <div className={styles["box"]}>
                <label htmlFor="cep">CEP</label>
                <div className={styles["div-input"]}>
                  <input type="text" onChange={handleInputChange} />
                  <FaSearch
                    className={styles["icon-procurar"]}
                    onClick={handleSearch}
                  />
                </div>
              </div>
            </div>

            <div className={styles["box-input"]}>
              <label htmlFor="uf">UF</label>
              <Input type="text" />
            </div>

            <div className={styles["box-input"]}>
              <label htmlFor="cidade">Cidade</label>
              <Input type="text" />
            </div>

            <div className={styles["box-input"]}>
              <label htmlFor="logradouro">Logradouro</label>
              <Input type="text" />
            </div>

            <div className={styles["box-input"]}>
              <label htmlFor="bairro">Bairro</label>
              <Input type="text" />
            </div>

            <div className={styles["box-input"]}>
              <label htmlFor="numero">Número</label>
              <Input type="text" />
            </div>
            
          </div>
          <div className={styles["grupo-progress"]}>
            <h4>Etapa 2 de 3</h4>
            <div className={styles["progress-container"]}>
              <div
                className={styles["progress-bar"]}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className={styles["botoes"]}>
            <ActionButton type="secundary" label="Voltar" />
            <ActionButton type="primary" label="Próximo" />
          </div>
          {address && (
              <div>
                <p>CEP: {address.cep}</p>
                <p>Logradouro: {address.logradouro}</p>
                <p>Bairro: {address.bairro}</p>
                <p>Cidade: {address.localidade}</p>
                <p>Estado: {address.uf}</p>
              </div>
            )}
        </form>
      </div>
    </Container>
  );
}

export default CadastroEndereco;
