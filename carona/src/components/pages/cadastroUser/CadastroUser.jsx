import styles from "./CadastroUser.module.css";
import Container from "../../layout/container/Container";
import { useEffect, useState } from "react";
import Input from "../../layout/input/Input";
import { BsFillPencilFill } from "react-icons/bs";
import axios from "axios";

function CadastroUser({ handleUserEvent }) {
  const [progress, setProgress] = useState(99.9);
  const [image, setImage] = useState("");
  const [senha, setSenha] = useState("");

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

    const formData = {
      senha: e.target.senha.value,
      confirmaSenha: e.target["confirma-senha"].value,
      imageUrl: image,
    };

    try {
      const response = await axios.post(
        "https://localhost:8080/usuarios/cadastrar",
        formData
      );
      console.log(response.data);

      setProgress(99.9);
    } catch (error) {
      console.error("Error registering user:", error);
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
                type="password"
                placeholder="*************"
                name="senha"
                id="senha"
                onChangeEvent={handleSenhaChange}
              />
              <Input
                label="Confirmação de senha"
                type="password"
                placeholder="*************"
                id="confirma-senha"
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
