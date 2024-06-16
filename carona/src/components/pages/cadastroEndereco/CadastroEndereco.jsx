import React, { useState } from "react";
import Container from "../../layout/container/Container";
import styles from "./CadastroEndereco.module.css";
import Input from "../../layout/input/Input";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function CadastroEndereco({ handleUserEvent, handleAddressData, onNextClick }) {
  const [progress, setProgress] = useState(66.6);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});
  const [error, setError] = useState();
  const [numero, setNumero] = useState(""); // Estado para armazenar o número digitado

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${encodeURIComponent(cep)}/json/`
      );
      setAddress(response.data);
      setError(null);
      handleAddressData(response.data);
      // Ao buscar o CEP, preencha o número se já estiver definido
      if (numero) {
        console.log(numero)
        setNumero(numero);
      
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("CEP não encontrado");
      setAddress({});
      handleAddressData({});
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCep(value);
    handleUserEvent({ target: { name: 'cep', value: value } })
  };

  const handleNumeroChange = (e) => {
    const { value } = e.target;
    setNumero(value);
    setAddress({
      ...address,
      numero: value,
    });
    handleUserEvent({ target: { name: 'numero', value: value } }); 
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se o número está preenchido antes de permitir avançar
    if (!numero) {
      setError("Por favor, preencha o número.");
      return;
    }
    setProgress(66.6);
    setError(null); // Limpa o erro se o número estiver preenchido
    onNextClick(); // Chama a função para avançar para a próxima etapa
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Container customClass="min-height">
      <div className={styles["div-forms"]}>
        <h1>Endereço</h1>
        {error && <p>{error}</p>}
        <form className={styles["forms"]} onSubmit={handleSubmit}>
          <div className={styles["box-inputs"]}>
            <Input
              label="CEP"
              placeholder="Digite o CEP"
              onChangeEvent={handleInputChange}
              value={cep}
              type="text"
              id="cep"
              icon={<FaSearch />}
              iconHandleEvent={handleSearch}
              onKeyPress={handleKeyPress}
            />

            <Input
              label="UF"
              placeholder="UF"
              value={address.uf || ""}
              type="text"
              id="uf"
              disabled
            />

            <Input
              label="Cidade"
              placeholder="Cidade"
              value={address.localidade || ""}
              type="text"
              id="cidade"
              disabled
            />

            <Input
              label="Logradouro"
              placeholder="Logradouro"
              value={address.logradouro || ""}
              type="text"
              id="logradouro"
              disabled
            />

            <Input
              label="Bairro"
              placeholder="Bairro"
              value={address.bairro || ""}
              type="text"
              id="bairro"
              disabled
            />

            <Input
              label="Número"
              placeholder="Digite o número"
              type="text"
              value={numero}
              onChangeEvent={handleNumeroChange}
            />
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
        </form>
      </div>
    </Container>
  );
}

export default CadastroEndereco;
