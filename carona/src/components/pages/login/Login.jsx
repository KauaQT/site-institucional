import styles from './Login.module.css'
import Container from '../../layout/container/Container'
import img from '../../../utils/assets/login-image.svg'
import Input from '../../layout/input/Input'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import ActionButton from '../../layout/action_button/ActionButton'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../../Api';


function Login() {
    const [user, setUser] = useState({
        email: '',
        senha: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    function entrar() {
        api.post('/usuarios/login', user)
        .then((response) => {
            console.log('Login realizado com sucesso')

            localStorage.setItem('idUser', response.data.id)
            localStorage.setItem('nomeUser', response.data.id)
            localStorage.setItem('dataNascimentoUser', response.data.dataNascimento)
            localStorage.setItem('generoUser', response.data.genero)
            localStorage.setItem('imagemUser', response.data.imagem)
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
            <Container customClass='min-height' >
                {/* div de imagem */}
                <div className={styles['div-illustration']}>
                    <img src={img} alt="Imagem de Login" />
                </div>

                {/* div de forms */}

                <div className={styles['div-forms']}>
                    <form className={styles['forms']}>
                        <h1>Login</h1>

                        <div className={styles['box-inputs']}>
                            <Input type='text' placeholder='Digite o email' label='Email' id='email' onChangeEvent={(e) => setUser({email: e.target.value})} />
                            
                            <Input type={showPassword ? 'text' : 'password'} placeholder='Digite a senha' label='Senha' id='email' onChangeEvent={(e) => setUser({senha: e.target.value})} textLink='Esqueci a senha' linkTo='/redefinir-senha' icon={showPassword ? <IoMdEyeOff /> : <IoMdEye />} iconHandleEvent={() => setShowPassword(!showPassword)} />
                        </div>

                        <ActionButton type='primary' label='Entrar' onClickEvent={entrar} />

                        <Link to='/cadastro'><p>Não tenho conta, quero me cadastrar</p></Link>
                    </form>
                </div>


            </Container>
    )
}

export default Login