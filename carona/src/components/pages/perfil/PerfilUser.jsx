import React, { useState, useEffect } from 'react';
import Sidebar from '../../layout/sidebar/Sidebar';
import styles from './PerfilUser.module.css';
import distanciaIcon from '../../../utils/assets/distanciaIcon.svg';
import { IoIosInformation } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { IoTime } from 'react-icons/io5';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { IoMdChatbubbles } from 'react-icons/io';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import api from '../../../Api';

function PerfilUser() {
  let local = useLocation();
  const [isFocused, setIsFocused] = useState(false);
  const [nome, setNome] = useState('');
  const [tipoUsuario , setTipoUsuario] = useState('');
  const [idade , setIdade] = useState('');
  const [viagensRealizadas , setViagensRealizadas] = useState('');
  const [estrelas , setEstrelas] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const chamarApi = async () => {
    try {
      const userId = sessionStorage.getItem('idUsuario');

      if (!userId) {
        console.log('idUsuario não encontrado em sessionStorage');
        return;
      }

      const response = await api.post(`/usuario/detalhes/${userId}`);
      console.log('Detalhes do perfil obtidos com sucesso:', JSON.stringify(response.data));

      setNome(response.data.nome);
      setTipoUsuario(response.data.tipoUsuario);
      setIdade(response.data.idade);
      setViagensRealizadas(response.data.quantidadeViagens);
      setEstrelas(
        response.data.tipoUsuario === 'PASSAGEIRO'
          ? response.data.mediaEstrelas
          : response.data.mediaEstrelasMotorista
      );
      setFeedbacks(response.data.detalhesFeedback || []);

      sessionStorage.setItem('userProfileData', JSON.stringify(response.data));

      // Redirecionar somente se não estamos já na página de perfil
      if (window.location.pathname !== "/meu-perfil") {
        window.location = "/meu-perfil";
      }
    } catch (error) {
      console.log('Erro ao obter detalhes do perfil:', error);
    }
  };

  // Chama a API assim que o componente for montado
  useEffect(() => {
    chamarApi();
  }, []);

  const handleOnFocus = () => {
    console.log('focus');
    setIsFocused(true);
  };

  const handleBlur = () => {
    console.log('blur');
    setIsFocused(false);
  };

  return (
    <>
      <Sidebar currentPageName={local.pathname} />
      <div className={styles['main']}>
        <div className={styles['metricas']}>
          <div className={styles['conjunto-user']}>
            <h3>Perfil - {nome}</h3> {/* Exibe o nome dinâmico aqui */}
            <div className={styles['box-user']}>
              <div className={styles['user-foto']}>
                <img src={localStorage.getItem('userProfileImage')} alt="" />
              </div>
              <div className={styles['user-infos']}>
                <p>{tipoUsuario}</p>
                <span>{idade} anos</span>
                <div className={styles['box-nota']}>
                  <FaStar />
                  <span id="user-nota">{estrelas}</span>
                </div>
              </div>
            </div>
            <div className={styles['box-viagens']}>
              <img src={distanciaIcon} alt="icon viagens" />
              <div className={styles['registros']}>
                <span>{viagensRealizadas}</span>
                <span>viagens realizadas</span>
              </div>
            </div>
          </div>
          <div className={styles['grafico']}>
            <IoIosInformation
              className={styles['info']}
              onMouseOver={handleOnFocus}
              onBlur={handleBlur}
            />
            <div className={styles[isFocused ? 'visible' : 'disabled']} onMouseOut={handleBlur}>
              <div className={styles['conjunto-info']}>
                <IoTime />
                <span>Pontualidade</span>
              </div>
              <div className={styles['conjunto-info']}>
                <AiFillSafetyCertificate />
                <span>Segurança</span>
              </div>
              <div className={styles['conjunto-info']}>
                <IoMdChatbubbles />
                <span>Comunicação</span>
              </div>
              <div className={styles['conjunto-info']}>
                <PiSteeringWheelFill />
                <span>Dirigibilidade</span>
              </div>
            </div>
            <div className={styles['charts']}>
              <div className={styles['conjunto-chart']}>
                <div className={styles['chart']}>
                  <div className={styles['metrica']}></div>
                </div>
                <IoTime />
              </div>
              <div className={styles['conjunto-chart']}>
                <div className={styles['chart']}>
                  <div className={styles['metrica']}></div>
                </div>
                <AiFillSafetyCertificate />
              </div>
              <div className={styles['conjunto-chart']}>
                <div className={styles['chart']}>
                  <div className={styles['metrica']}></div>
                </div>
                <IoMdChatbubbles />
              </div>
              <div className={styles['conjunto-chart']}>
                <div className={styles['chart']}>
                  <div className={styles['metrica']}></div>
                </div>
                <PiSteeringWheelFill />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['divisoria']}></div>
        <div className={styles['avaliacoes']}>
          <span>Avaliações</span>
          <div className={styles['comentarios-container']}>
            {feedbacks.map((feedback, index) => (
              <div key={index} className={styles['comentario']}>
                <div className={styles['header']}>
                  <div className={styles['user-infos']}>
                    <div className={styles['user-foto']}>
                      <img src={localStorage.getItem('userProfileImage')} alt="" />
                    </div>
                    <p>{feedback.nome}</p>
                  </div>
                  <div className={styles['box-nota']}>
                    <FaStar />
                    <span id="user-nota">{feedback.quantidadeEstrelas}</span>
                  </div>
                </div>
                <span>{feedback.comentario}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilUser;
