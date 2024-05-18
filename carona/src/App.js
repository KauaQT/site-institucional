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

// Importando elementos de layout
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Container from "./components/layout/container/Container";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/caronas" element={<Caronas />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/redefinir-senha" element={<RedefinirSenha />} />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
