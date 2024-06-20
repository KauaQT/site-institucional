import styles from "./CadastroUser.module.css";
import Container from "../../layout/container/Container";
import { useEffect, useState } from "react";
import Input from "../../layout/input/Input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaCheck, FaRegCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

function CadastroUser({ handleUserEvent }) {
  const [progress, setProgress] = useState(99.9);
  const [image, setImage] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmacao, setShowPasswordConfirmacao] = useState(false);

  const [hasMaiuscula, setHasMaiuscula] = useState(false);
  const [hasMinuscula, setHasMinuscula] = useState(false);
  const [hasNumero, setHasNumero] = useState(false);
  const [hasEspecial, setHasEspecial] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    script.onload = () => {
      console.log("Cloudinary widget carregou");
    };
    document.body.appendChild(script);
  }, []);

  const handleSenhaChange = (event) => {
    const newSenha = event.target.value;
    setSenha(newSenha);
    handleUserEvent(event);

    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/;
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[^A-Za-z0-9]/;

    setHasMaiuscula(letrasMaiusculas.test(newSenha));
    setHasMinuscula(letrasMinusculas.test(newSenha));
    setHasNumero(numeros.test(newSenha));
    setHasEspecial(caracteresEspeciais.test(newSenha));
  };

  const handleConfirmaSenhaChange = (event) => {
    setConfirmaSenha(event.target.value);
  };

  const openWidget = () => {
    window.cloudinary
      .openUploadWidget(
        {
          cloudName: "dkzjrifqn",
          uploadPreset: "profile_pictures",
          sources: ["local", "url", "camera"],
          multiple: false,
          cropping: true,
        },
        (error, result) => {
          if (result && result.event === "success") {
            const imageUrl = result.info.secure_url;
            console.log("URL da imagem salva:", imageUrl);
            setImage(imageUrl);
            handleUserEvent({ target: { name: "imageUrl", value: imageUrl } });
            localStorage.setItem("userProfileImage", imageUrl);
          } else if (error) {
            console.error("Erro ao fazer upload:", error);
          }
        }
      )
      .open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      toast.error("As senhas não coincidem.");
      return;
    }

    if (!(hasMaiuscula, hasMinuscula, hasNumero, hasEspecial)) {
      toast.error("A senha não atende aos critérios de segurança.");
      return;
    }

    const formData = {
      senha: senha,
      confirmaSenha: confirmaSenha,
      // senha: e.target.senha.value,
      // confirmaSenha: e.target["confirma-senha"].value,
      imageUrl: image,
    };

    try {
      const response = await axios.post(
        "https://localhost:8080/usuarios/cadastrar",
        formData
      );
      console.log(response.data);

      setProgress(99.9);
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Erro ao cadastrar usuário.");
    }
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Container customClass="min-height">
      {/* div de imagem*/}

      {/* div de forms */}
      <div className={styles["div-forms"]}>
        <h1>Foto e Senha</h1>
        <form className={styles["forms"]} onSubmit={handleSubmit}>
          <div className={styles["box-senhas-foto"]}>
            <div className={styles["box-inputs"]}>
              <Input
                label="Senha"
                type={showPassword ? "text" : "password"}
                placeholder="*************"
                name="senha"
                id="senha"
                icon={showPassword ? <FiEyeOff /> : <FiEye />}
                iconHandleEvent={() => setShowPassword(!showPassword)}
                onChangeEvent={handleSenhaChange}
              />
              <Input
                label="Confirmação de senha"
                type={showPasswordConfirmacao ? "text" : "password"}
                placeholder="*************"
                id="confirma-senha"
                icon={showPasswordConfirmacao ? <FiEyeOff /> : <FiEye />}
                iconHandleEvent={() =>
                  setShowPasswordConfirmacao(!showPasswordConfirmacao)
                }
                onChangeEvent={handleConfirmaSenhaChange}
              />
            </div>
            <div className={styles["image-box"]}>
              <div className={styles["circle-input"]} onClick={openWidget}>
                <input type="file" id="file" style={{ display: "none" }} />
                {image ? (
                  <img
                    src={image}
                    alt="User profile"
                    className={styles["profile-image"]}
                  />
                ) : (
                  <div className={styles["placeholder-image"]}>
                    {/* <BsFillPencilFill className={styles["pencil-icon"]} /> */}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles["validations"]}>
            <p>A senha deve conter:</p>
            <div className={styles["box-validators"]}>
              <div
                className={
                  hasMaiuscula
                    ? `${styles["validator"]} ${styles["valid"]}`
                    : `${styles["validator"]} ${styles["invalid"]}`
                }
              >
                {hasMaiuscula ? <FaCheck /> : <FaRegCircle />}
                <span>Letra maiúscula</span>
              </div>
              <div
                className={
                  hasMinuscula
                    ? `${styles["validator"]} ${styles["valid"]}`
                    : `${styles["validator"]} ${styles["invalid"]}`
                }
              >
                {hasMinuscula ? <FaCheck /> : <FaRegCircle />}
                <span>Letra minúscula</span>
              </div>
              <div
                className={
                  hasNumero
                    ? `${styles["validator"]} ${styles["valid"]}`
                    : `${styles["validator"]} ${styles["invalid"]}`
                }
              >
                {hasNumero ? <FaCheck /> : <FaRegCircle />}
                <span>Número</span>
              </div>
              <div
                className={
                  hasEspecial
                    ? `${styles["validator"]} ${styles["valid"]}`
                    : `${styles["validator"]} ${styles["invalid"]}`
                }
              >
                {hasEspecial ? <FaCheck /> : <FaRegCircle />}
                <span>Caracter especial</span>
              </div>
            </div>
          </div>
          <div className={styles["grupo-progress"]}>
            <h4>Etapa 3 de 3</h4>
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

export default CadastroUser;
