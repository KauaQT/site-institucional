import styles from './Cadastro.module.css'
import Container from '../../layout/container/Container'
import img from '../../../utils/assets/cadastro-image.svg'
import { useState } from 'react'
import ActionButton from '../../layout/action_button/ActionButton'
import Input from '../../layout/input/Input'
import { Calendar } from 'primereact/calendar';
import { CiCalendar } from "react-icons/ci";

function Cadastro() {
    const [user, setUser] = useState({})
    const [perfilMotoristaChecked, setPerfilMotoristaChecked] = useState(false)
    const [perfilPassageiroChecked, setPerfilPassageiroChecked] = useState(false)

    function handleUserChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function checkPerfil(e) {
        if (e.target.id == 'passageiro-div') {
            setPerfilPassageiroChecked(true)
            setPerfilMotoristaChecked(false)
        } else {
            setPerfilMotoristaChecked(true)
            setPerfilPassageiroChecked(false)
        }
    }

    return (
        <Container customClass='min-height' >
            {/* div de imagem */}
            <div className={styles['div-illustration']}>
                <h1>Cadastro</h1>
                <img src={img} alt="login-image" />
            </div>

            {/* div de forms */}
            <div className={styles['div-forms']}>
                <h1>Dados Pessoais</h1>
                <form className={styles['forms']}>
                    <div className={styles['box-inputs']}>
                        <Input type='text' placeholder='Digite o nome' name='nome' label='Nome' id='nome' onChangeEvent={handleUserChange} />

                        <div className={styles['sexo-box-input']}>
                            <h4>Sexo</h4>

                            
                        </div>

                        <Input type='text' placeholder='Digite o email' name='email' label='Email' id='email' onChangeEvent={handleUserChange} />

                        <Input type='text' placeholder='Digite o CPF' name='cpf' label='CPF' id='cpf' onChangeEvent={handleUserChange} />

                        {/* <Input type='date' placeholder='dd/mm/aaaa' name='dataNascimento' label='Data de Nascimento' id='dataNascimento' onChangeEvent={handleUserChange} /> */}
                        <div className={styles['date-box-input']}>
                            <h4>Data de Nascimento</h4>

                            <div className={styles['date-input']}>
                                <Calendar placeholder='dd/mm/aaaa' onChange={handleUserChange} dateFormat='dd/mm/yy' />

                                <CiCalendar />
                            </div>
                        </div>

                        <div className={styles['perfil-box-input']}>
                            <h4>Perfil</h4>

                            <div className={styles['perfil-options']}>
                                <div className={styles[`${perfilMotoristaChecked ? 'perfil-opt perfil-checked' : 'perfil-opt'}`]} id='motorista-div' onClick={checkPerfil}>
                                    <label htmlFor="motorista">Motorista</label>
                                    <input type="radio" name="perfil" id="motorista" value='motorista' onChange={handleUserChange} />
                                </div>
                                <div className={styles[`${perfilPassageiroChecked ? 'perfil-opt perfil-checked' : 'perfil-opt'}`]} id='passageiro-div' onClick={checkPerfil}>
                                    <label htmlFor="passageiro">Passageiro</label>
                                    <input type="radio" name="perfil" id="passageiro" value='passageiro' onChange={handleUserChange} />
                                </div>
                            </div>
                        </div>

                    </div>

                    <ActionButton type='primary' label='Próximo' />

                </form>
            </div>
        </Container>
    )
}

export default Cadastro