// Importando os elementos para poder navegar entre as páginas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importando as páginas
import Home from './components/pages/home/Home'
import Chat from './components/pages/chat/Chat'
import Login from './components/pages/login/Login'
import Perfil from './components/pages/meu-perfil/Perfil'
import Caronas from './components/pages/caronas/Caronas'
import Viagens from './components/pages/viagens/Viagens'
import Feedback from './components/pages/feedback/Feedback'
import Cadastro from './components/pages/cadastro/Cadastro'
import Transacoes from './components/pages/transacoes/Transacoes'
import Fidelizados from './components/pages/fidelizados/Fidelizados'
import CadastroCarro from './components/pages/cadastrar_carro/CadastroCarro'
import ChatContainer from './components/pages/chat/chat_container/ChatContainer'
import RedefinirSenha from './components/pages/redefinir_senha/RedefinirSenha'
import OferecerCarona from './components/pages/oferecer_carona/OferecerCarona'
import ProcurarCarona from './components/pages/procurar_carona/ProcurarCarona'
import DetalhesViagem from './components/pages/detalhes_viagem/DetalhesViagem'
import PerfilUser from "./components/pages/perfil/PerfilUser";

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
          <Route path='/redefinir-senha' element={<RedefinirSenha />} />
          <Route path='/meu-perfil' element={<Perfil />} />
          <Route path="/perfil/:idUser" element={<PerfilUser />} />
          <Route path='/viagens/:idUser' element={<Viagens />} />
          <Route path="/chat" element={<ChatContainer />} />
          <Route path='/transacoes/:idUser' element={<Transacoes />} />
          <Route path='/fidelizados/:idUser' element={<Fidelizados />} />
          <Route path='/viagens/oferecer' element={<OferecerCarona />} />
          <Route path='/viagens/procurar' element={<ProcurarCarona />} />
          <Route path='/viagens/detalhes/:idViagem' element={<DetalhesViagem />} />
          <Route path='/feedback/:idUser' element={<Feedback />} />
          <Route path="/carros/:idUser" element={<CadastroCarro />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
