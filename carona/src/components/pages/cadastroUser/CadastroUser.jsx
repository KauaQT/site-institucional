import styles from "./CadastroUser.module.css";
import Container from "../../layout/container/Container";
import { useState } from "react";
import Input from "../../layout/input/Input";
import { BsFillPencilFill } from "react-icons/bs";
import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import { Cloudinary } from 'cloudinary-core';

function CadastroUser() {
  const [progress, setProgress] = useState(99.9);
  const [image, setImage] = useState('');

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Atualiza o progresso para 100% quando o formulário é enviado
    setProgress(99.9);
  };

  // const openWidget = () => {
  //   const cloudinary = new Cloudinary({ cloud_name: 'YOUR_CLOUD_NAME' });

  //   cloudinary.createUploadWidget(
  //     {
  //       cloudName: 'YOUR_CLOUD_NAME',
  //       uploadPreset: 'YOUR_UPLOAD_PRESET',
  //       sources: ['local', 'url', 'camera'],
  //       multiple: false,
  //       cropping: true,
  //     },
  //     (error, result) => {
  //       if (result.event === 'success') {
  //         setFormData({
  //           ...formData,
  //           imageUrl: result.info.secure_url,
  //         });
  //       }
  //     }
  //   ).open();
  // };

  // const handleSubmitImg = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('/api/register', formData);
  //     console.log(response.data);
  //     // Redirecione ou informe o usuário sobre o sucesso do cadastro
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //   }
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
              <div className={styles["circle-input"]}>
                <label htmlFor="file"><BsFillPencilFill /></label>
                <input type="file" id="file" onChange={handleImageChange}/>
                <img src={image} alt="" />
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
