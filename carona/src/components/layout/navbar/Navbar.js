import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import Container from "../container/Container"
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <p>Icon</p>
                <ul>
                    <li>
                        <Link>Como funciona</Link>
                    </li>
                    <li>
                        <Link>Vantagens</Link>
                    </li>
                    <li>
                        <Link>Motorista</Link>
                    </li>
                    <li>
                        <Link>Passageiro</Link>
                    </li>
                    <li id="procurar">
                        <FaSearch />
                        <Link>Procurar</Link>
                    </li>
                </ul>
                <FaUserCircle />
            </Container>
        </nav>
    )
}

export default Navbar