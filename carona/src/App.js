// Importando os elementos para poder navegar entre as páginas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importando as páginas
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Caronas from "./components/pages/caronas/Caronas";
import Contato from "./components/pages/contato/Contato";
import Cadastro from "./components/pages/cadastro/Cadastro";
import QuemSomos from "./components/pages/quem_somos/QuemSomos";
import RedefinirSenha from "./components/pages/redefinir_senha/RedefinirSenha";
import Viagens from "./components/pages/viagens/Viagens";
import Transacoes from "./components/pages/transacoes/Transacoes";
import Fidelizados from "./components/pages/fidelizados/Fidelizados";
import Chat from "./components/pages/chat/Chat";
import OferecerCarona from "./components/pages/oferecer_carona/OferecerCarona";
import Perfil from "./components/pages/meu-perfil/Perfil";
import ProcurarCarona from "./components/pages/procurar_carona/ProcurarCarona";
import PerfilUser from "./components/pages/perfil/PerfilUser";
import CadastroCarro from "./components/pages/cadastrar_carro/CadastroCarro";


// Importando elementos de layout
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Container from "./components/layout/container/Container";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ChatContainer from "./components/pages/chat/chat_container/ChatContainer";


function App() {
  return (
    <Router>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/caronas" element={<Caronas />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/redefinir-senha" element={<RedefinirSenha />} />
          <Route path="/meu-perfil" element={<Perfil />} />
          <Route path="/perfil" element={<PerfilUser />} />
          <Route path="/viagens" element={<Viagens />} />
          <Route path="/transacoes" element={<Transacoes />} />
          <Route path="/fidelizados" element={<Fidelizados />} />
          <Route path="/chat" element={<ChatContainer />} />
          <Route path="/oferecer-carona" element={<OferecerCarona />} />
          <Route path="/procurar-carona" element={<ProcurarCarona />} />
          <Route path="/cadastro-carro" element={<CadastroCarro />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
