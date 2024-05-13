import styles from "./CadastroEndereco.module.css";
import Container from "../../layout/container/Container";
import { useState } from "react";
import ActionButton from "../../layout/action_button/ActionButton";
import Input from "../../layout/input/Input";
import { FaSearch } from "react-icons/fa";

import axios from "axios";

function CadastroEndereco({handleUserEvent}) {
  const [progress, setProgress] = useState(66.6);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});
  const [error, setError] = useState();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${encodeURIComponent(cep)}/json/`
      );
      setAddress(response.data);
      console.log(address)
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
            {/* <div className={styles["busca-cep"]}>
              <div className={styles["box"]}>
                <label htmlFor="cep">CEP</label>
                <div className={styles["div-input"]}>
                  <input placeholder='Digite o CEP' type="text" onChange={handleInputChange} />
                  <FaSearch
                    className={styles["icon-procurar"]}
                    onClick={handleSearch}
                  />
                </div>
              </div>
            </div> */}
          <Input label='CEP' placeholder='Digite o CEP' onChangeEvent={(e) => {
            setCep(e.target.value)
            }} type="text" id='cep' icon={<FaSearch />} iconHandleEvent={handleSearch} />

          <Input label='UF' placeholder='UF' value={address.uf} type="text" id='uf' disabled />
          
          <Input label='Cidade' placeholder='Cidade' value={address.localidade} type="text" id='cidade' disabled />
          
          <Input label='Logradouro' placeholder='Logradouro' value={address.logradouro} type="text" id='logradouro' disabled />
          
          <Input label='Bairro' placeholder='Bairro' value={address.bairro} type="text" id='bairro' disabled />
          
          <Input label='Número' placeholder='Digite o número' type="text" />
            
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
          {/* <div className={styles["botoes"]}>
            <ActionButton type="secondary" label="Voltar" />
            <ActionButton type="primary" label="Próximo" />
          </div> */}
        </form>
      </div>
    </Container>
  );
}

export default CadastroEndereco;
