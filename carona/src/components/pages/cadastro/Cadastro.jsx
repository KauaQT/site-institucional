import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../layout/container/Container";
import img from "../../../utils/assets/cadastro-image.svg";
import styles from "./Cadastro.module.css";
import ActionButton from "../../layout/action_button/ActionButton";
import CadastroPessoal from "../cadastroPessoal/CadastroPessoal";
import CadastroEndereco from "../cadastroEndereco/CadastroEndereco";
import CadastroUser from "../cadastroUser/CadastroUser";
import axios from "axios";

function Cadastro() {
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState(1);
  const [pessoalData, setPessoalData] = useState({});
  const [enderecoData, setEnderecoData] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    cidade: "",
    estado: "",
  });

  const [userData, setUserData] = useState({
    senha: "",
    urlImagem: "",
  });

  const handleUserEvent = (event) => {
    const { name, value } = event.target;
    setPessoalData({
      ...pessoalData,
      [name]: value,
    });
    console.log("JSON de usuario " + JSON.stringify(pessoalData));
  };

  const handleAddressData = (data) => {
    setEnderecoData({
      cep: data.cep || "",
      logradouro: data.logradouro || "",
      cidade: data.localidade || "",
      estado: data.uf || "",
      numero: data.numero || "",
    });

    console.log("JSON de usuario " + JSON.stringify(pessoalData));
    console.log("JSON de cadastro " + JSON.stringify(enderecoData));
  };

  const validatePessoalData = () => {
    return (
      pessoalData.nome &&
      pessoalData.email &&
      pessoalData.cpf &&
      pessoalData.dataNascimento &&
      pessoalData.sexo &&
      pessoalData.perfil
    );
  };

  const validateEnderecoData = () => {
    return (
      enderecoData.cep &&
      enderecoData.numero
    );
  };

  const validateUserData = () => {
    return userData.senha;
  };

  const handleClick = () => {
    if (currentComponent === 1 && !validatePessoalData()) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (currentComponent === 2 && validateEnderecoData()) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (currentComponent === 3 && validateUserData()) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (currentComponent === 3) {
      const allData = {
        pessoalData,
        enderecoData,
        userData,
      };
      console.log("Dados de Cadastro:", allData);
      enviarDadosParaBackend(allData);
      toast.success("Cadastro realizado com sucesso!");
    } else {
      setCurrentComponent((current) => current + 1);
    }
    // if (currentComponent === 3) {
    //   const allData = {
    //     pessoalData,
    //     enderecoData,
    //     userData,
    //   };
    //   console.log("Dados de Cadastro:", allData);
    //   enviarDadosParaBackend(allData);
    //   toast.success("Cadastro realizado com sucesso!");
    // } else if (validatePessoalData()) {
    //   setCurrentComponent((current) => current + 1);
    // } else if (validateEnderecoData()) {
    //   setCurrentComponent((current) => current + 1);
    // } else {
    //   toast.error("Preencha todos os campos.");
    // }
  };

  const backHandleClick = () => {
    if (currentComponent === 1) {
      toast.error("Você está na primeira etapa do cadastro.");
    } else {
      setCurrentComponent((current) => current - 1);
    }
  };

  const enviarDadosParaBackend = (dados) => {
    // Extrair os dados necessários do objeto `dados`
    const { pessoalData, enderecoData, userData } = dados;

    // Montar o objeto JSON no formato esperado pelo backend
    const jsonCadastro = {
      nome: pessoalData.nome,
      cpf: pessoalData.cpf,
      email: pessoalData.email,
      senha: pessoalData.senha,
      dataNascimento: pessoalData.dataNascimento,
      genero: pessoalData.sexo === "masculino" ? "Masculino" : "Feminino",
      tipoUsuario: pessoalData.perfil.toUpperCase(),
      endereco: {
        cep: enderecoData.cep,
        logradouro: enderecoData.logradouro,
        cidade: enderecoData.cidade,
        uf: enderecoData.estado.toUpperCase(),
        numero: pessoalData.numero,
      },
    };

    if (pessoalData.imageUrl) {
      jsonCadastro.urlImagemUsuario = pessoalData.imageUrl;
    }

    console.log("Enviando dados para o backend:", JSON.stringify(jsonCadastro));

    axios
      .post("http://localhost:8080/usuario/cadastrar", jsonCadastro)
      .then((response) => {
        const { idUsuario, tipoUsuario } = response.data;

        sessionStorage.setItem("idUsuario", idUsuario);
        sessionStorage.setItem("tipoUsuario", tipoUsuario);

        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
  };

  const handleCadastroCompleto = (formData) => {
    // Atualiza os dados de usuário com a senha e a URL da imagem
    setUserData({
      senha: formData.senha,
      urlImagem: formData.imageUrl,
    });

    console.log("JSON DE USUARIO" + pessoalData);
    console.log("JSON DE CADASTRO" + enderecoData);
    console.log("JSON " + userData);

    // Aqui você pode enviar os dados para o backend, se necessário
    // enviarDadosParaBackend(formData);
  };

  return (
    <Container customClass="min-height">
      <div className={styles["main"]}>
        <div className={styles["div-illustration"]}>
          <h1>Cadastro</h1>
          <img src={img} alt="login-imagem" />
        </div>
        <div className={styles["grupo-cadastro"]}>
          {currentComponent === 1 && (
            <CadastroPessoal handleUserEvent={handleUserEvent} />
          )}
          {currentComponent === 2 && (
            <CadastroEndereco
              handleUserEvent={handleUserEvent}
              handleAddressData={handleAddressData}
              enderecoData={enderecoData}
            />
          )}
          {currentComponent === 3 && (
            <CadastroUser handleUserEvent={handleUserEvent} />
          )}
          <div className={styles["botoes"]}>
            {currentComponent !== 1 && (
              <ActionButton
                onClickEvent={backHandleClick}
                type="secondary"
                label="Voltar"
              />
            )}
            <ActionButton
              onClickEvent={handleClick}
              type="primary"
              label={currentComponent === 3 ? "Finalizar" : "Próximo"}
              // disabled={
              //   (currentComponent !== 3 && !validatePessoalData()) ||
              //   (currentComponent !== 3 && !validateEnderecoData())
              // }
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cadastro;
