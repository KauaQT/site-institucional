import React from "react";
import styles from "./CardCarro.module.css";
import image from "../../../../utils/assets/image-proxima-viagem.svg"; // Atualize o caminho da imagem conforme necessário
import { BsPencilFill } from "react-icons/bs";
import { TfiTrash } from "react-icons/tfi";

function CardCarro({ nomeCarro, marca, placa, cor, closeCard }) {
  return (
    <div className={styles["box-carro"]}>
      <div className={styles["carro-img"]}>
        <img src={image} alt="Imagem de carro" />
      </div>

      <span className={styles["column-separator"]}></span>

      <div className={styles["carro-info"]}>
        <div className={styles["nome-info"]}>
          <span id="nome-carro">{marca} {nomeCarro}</span>
        </div>

        <div className={styles["placa-info"]}>
          <span id="placa">{placa}</span>
        </div>
      </div>

      <div className={styles["carro-actions"]}>
        <button className={styles["button-detalhes"]}>
          <BsPencilFill />
          Editar
        </button>
        <button className={styles["button-cancelar"]} onClick={closeCard}>
          <TfiTrash />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default CardCarro;
