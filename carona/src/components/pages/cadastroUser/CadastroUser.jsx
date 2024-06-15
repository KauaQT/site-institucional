import styles from "./CadastroUser.module.css";
import Container from "../../layout/container/Container";
import { useEffect, useState } from "react";
import Input from "../../layout/input/Input";
import { BsFillPencilFill } from "react-icons/bs";
import axios from "axios";

function CadastroUser() {
  const [progress, setProgress] = useState(99.9);
  const [image, setImage] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    script.onload = () => {
      console.log("Cloudinary widget carregou");
    };
    document.body.appendChild(script);
  }, []);

  const openWidget = () => {
    // const cloudinary = new Cloudinary({ cloud_name: "caronaCloudinary" });

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
          if (result.event === "success") {
            setImage(result.info.secure_url);
            localStorage.setItem("userProfileImage", result.info.secure_url);
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Atualiza o progresso para 100% quando o formulário é enviado
  //   setProgress(99.9);
  // };

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
                id="senha"
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
          {/* <div className={styles["botoes"]}>
            <ActionButton type="secondary" label="Voltar" />
            <ActionButton type="primary" label="Próximo" />
          </div> */}
        </form>
      </div>
    </Container>
  );
}

export default CadastroUser;
