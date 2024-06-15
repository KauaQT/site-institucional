import React, { useState, useEffect } from 'react';
import styles from './Perfil.module.css';
import distanciaIcon from '../../../utils/assets/distanciaIcon.svg';
import transacaoIcon from '../../../utils/assets/transacaoIcon.svg';
import { IoIosInformation } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { IoTime } from 'react-icons/io5';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { IoMdChatbubbles } from 'react-icons/io';
import { PiSteeringWheelFill } from 'react-icons/pi';
import { BsPencilFill } from 'react-icons/bs';
import Sidebar from '../../layout/sidebar/Sidebar';
import ActionButton from '../../layout/action_button/ActionButton';
import api from '../../../Api';

function Perfil() {
  let local = useLocation();
  const [perfil, setPerfil] = useState(null); // Estado para armazenar os dados do perfil

  useEffect(() => {
    const fetchPerfil = async () => {
      console.log("Ola")
      try {
        const response = await api.get('/perfil'); // Endpoint da API para obter os dados do perfil
        const data = response.data; // Suponha que a resposta da API seja um objeto com os dados do perfil
        setPerfil(data); // Armazena os dados do perfil no estado
        sessionStorage.setItem('perfilData', JSON.stringify(data)); // Armazena os dados do perfil no sessionStorage
      } catch (error) {
        console.error('Erro ao obter dados do perfil:', error);
      }
    };

    fetchPerfil(); // Faz a requisição para obter os dados do perfil imediatamente após o componente ser montado
  }, []); // O array vazio [] significa que este useEffect será executado apenas uma vez, após a montagem inicial do componente

  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <Sidebar currentPageName={local.pathname} />
      <div className={styles['main']}>
        <h3>Meu Perfil</h3>
        {perfil ? (
          <div className={styles['metricas']}>
            <div className={styles['kpis']}>
              <div className={styles['viagens']}>
                <img src={distanciaIcon} alt="icon viagens" />
                <div className={styles['registros']}>
                  <span>{perfil.viagens}</span>
                  <span>viagens realizadas</span>
                </div>
              </div>
              <div className={styles['transacoes']}>
                <img src={transacaoIcon} alt="icon transacoes" />
                <div className={styles['registros']}>
                  <span>{perfil.transacoes}</span>
                  <span>Transações realizadas</span>
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
        ) : (
          <p>Carregando perfil...</p>
        )}
        <div className={styles['divisoria']}></div>
        <div className={styles['dados']}>
          <div className={styles['header']}>
            <h3>Dados Pessoais</h3>
            <div className={styles['button']}>
              <BsPencilFill />
              <span>Editar</span>
            </div>
          </div>
          <div className={styles['info-user']}>
            {perfil && (
              <>
                <div className={styles['conjunto-user']}>
                  <h4>Nome</h4>
                  <span>{perfil.nome}</span>
                </div>
                <div className={styles['conjunto-user']}>
                  <h4>Data</h4>
                  <span>{perfil.data_nascimento}</span>
                </div>
                <div className={styles['conjunto-user']}>
                  <h4>CPF</h4>
                  <span>{perfil.cpf}</span>
                </div>
                <div className={styles['conjunto-user']}>
                  <h4>CEP</h4>
                  <span>{perfil.cep}</span>
                </div>
                <div className={styles['conjunto-user']}>
                  <h4>Email</h4>
                  <span>{perfil.email}</span>
                </div>
                <div className={styles['conjunto-user']}>
                  <h4>Número</h4>
                  <span>{perfil.numero}</span>
                </div>
                <div className={styles['conjunto-user']}>
                  <h4>Sexo</h4>
                  <span>{perfil.sexo}</span>
                </div>
                <div className={styles['conjunto-user']}>
                  <h4>Perfil</h4>
                  <span>{perfil.perfil}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
