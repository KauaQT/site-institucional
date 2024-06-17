import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../layout/sidebar/Sidebar";
import styles from "./Fidelizados.module.css";
import { useEffect, useState } from "react";
import notFound from "../../../utils/assets/image-not-found-viagem.svg";
import FidelizadoCard from "./fidelizado_card/FidelizadoCard";
import api from "../../../Api";
import { toast } from "react-toastify";

function Fidelizados() {
  const navigate = useNavigate();
  const { idUser } = useParams();

  const [fidelizados, setFidelizados] = useState([]);

  useEffect(() => {
    api
      .get(`/fidelizados/${idUser}`)
      .then((res) => {
        console.log(res.data);
        setFidelizados(res.data);
      })
      .catch((error) => console.log(error));
  }, [idUser, fidelizados]);

  const handleRemoveFidelizado = async (idFidelizado) => {
    try {
      await api.delete(`/fidelizados/deletar/${idFidelizado}`);
      console.log("Fidelizado removido com sucesso");
      setFidelizados(
        fidelizados.filter((fidelizado) => fidelizado.id !== idFidelizado)
      );
      toast.success("Removido com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao remover");
    }
  };

  const handleConversarFidelizado = () => {
    navigate("/chat/");
  };

  return (
    <>
      <Sidebar currentPageName={"/fidelizados"} />
      <div className={styles["main"]}>
        <div className={styles["container"]}>
          <h3>Passageiros fidelizados</h3>

          {fidelizados.length > 0 ? (
            <div className={styles["fidelizados"]}>
              {fidelizados.map((fidelizado) => (
                <FidelizadoCard
                  nome={fidelizado.nome}
                  idade={fidelizado.idade}
                  totalViagens={fidelizado.viagemJuntos}
                  onConversarClick={() => handleConversarFidelizado()}
                  onRemoveClick={(fidelizado) =>
                    handleRemoveFidelizado(fidelizado.id)
                  }
                />
              ))}
            </div>
          ) : (
            <div className={styles["not-found"]}>
              <h4>Não há passageiro(s) fidelizado(s)</h4>
              <img src={notFound} alt="Nenhum fidelizado encontrado" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Fidelizados;
