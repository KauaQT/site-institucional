// Importando os elementos para poder navegar entre as páginas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importando as páginas
import Home from './components/pages/home/Home'
import Chat from './components/pages/chat/Chat'
import Login from './components/pages/login/Login'
import Perfil from './components/pages/perfil/Perfil'
import Caronas from './components/pages/caronas/Caronas'
import Contato from './components/pages/contato/Contato'
import Viagens from './components/pages/viagens/Viagens'
import Cadastro from './components/pages/cadastro/Cadastro'
import QuemSomos from './components/pages/quem_somos/QuemSomos'
import Transacoes from './components/pages/transacoes/Transacoes'
import Fidelizados from './components/pages/fidelizados/Fidelizados'
import RedefinirSenha from './components/pages/redefinir_senha/RedefinirSenha'
import OferecerCarona from './components/pages/oferecer_carona/OferecerCarona'
import ProcurarCarona from './components/pages/procurar_carona/ProcurarCarona'
import DetalhesViagem from './components/pages/detalhes_viagem/DetalhesViagem'

// Importando elementos de layout
import Container from './components/layout/container/Container'

function App() {
  return (
    <Router>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/caronas' element={<Caronas />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/quem-somos' element={<QuemSomos />} />
          <Route path='/redefinir-senha' element={<RedefinirSenha />} />
          <Route path='/meu-perfil' element={<Perfil />} />
          <Route path='/viagens' element={<Viagens />} />
          <Route path='/transacoes' element={<Transacoes />} />
          <Route path='/fidelizados' element={<Fidelizados />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/viagens/oferecer' element={<OferecerCarona />} />
          <Route path='/viagens/procurar' element={<ProcurarCarona />} />
          <Route path='/viagens/detalhes/:id' element={<DetalhesViagem />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;