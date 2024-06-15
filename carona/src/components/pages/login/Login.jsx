import React, { useState } from 'react';
import styles from './Login.module.css';
import Container from '../../layout/container/Container';
import img from '../../../utils/assets/login-image.svg';
import Input from '../../layout/input/Input';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import ActionButton from '../../layout/action_button/ActionButton';
import { Link } from 'react-router-dom';
import api from '../../../Api';

function Login() {
  const [user, setUser] = useState({
    email: '',
    senha: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    api.post('/usuario/login', null, { params: user })
      .then((response) => {
        console.log('Login realizado com sucesso:', response.data);
        localStorage.setItem('userData', JSON.stringify(response.data));

        // Após o login, obter os detalhes do perfil
        obterDetalhesPerfil(response.data.sessionStorage.idUsuario); // Aqui você deve substituir 'userId' com a propriedade correta do objeto de resposta

        // Redirecionar para a página do perfil
        // window.location = "/meu-perfil"; // Redirecionamento antigo

      })
      .catch(error => {
        console.log('Erro ao realizar login:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Função para obter os detalhes do perfil
  const obterDetalhesPerfil = (userId) => {
    api.get(`/usuario/detalhes/${userId}`)
      .then((response) => {
        console.log('Detalhes do perfil obtidos com sucesso:', response.data);
        // Aqui você pode lidar com os detalhes do perfil como quiser
        // Por exemplo, armazenar em sessionStorage ou estado local
        // Exemplo de armazenamento em sessionStorage:
        sessionStorage.setItem('userProfileData', JSON.stringify(response.data));

        // Redirecionar para a página do perfil após obter os detalhes
        window.location = "/meu-perfil";
      })
      .catch(error => {
        console.log('Erro ao obter detalhes do perfil:', error);
      });
  }

  return (
    <Container customClass='min-height'>
      <div className={styles['div-illustration']}>
        <img src={img} alt="Imagem de Login" />
      </div>

      <div className={styles['div-forms']}>
        <form className={styles['forms']} onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className={styles['box-inputs']}>
            <Input type='text' placeholder='Digite o email' label='Email' id='email' onChangeEvent={handleChange} />

            <Input type={showPassword ? 'text' : 'password'} placeholder='Digite a senha' label='Senha' id='senha' onChangeEvent={handleChange} textLink='Esqueci a senha' linkTo='/redefinir-senha' icon={showPassword ? <IoMdEyeOff /> : <IoMdEye />} iconHandleEvent={() => setShowPassword(!showPassword)} />
          </div>

          <div className={styles['button-wrapper']}>
            <ActionButton type='primary' label={isLoading ? 'Carregando...' : 'Entrar'} disabled={isLoading} />
          </div>

          <Link to='/cadastro'><p>Não tenho conta, quero me cadastrar</p></Link>
        </form>
      </div>
    </Container>
  );
}

export default Login;
