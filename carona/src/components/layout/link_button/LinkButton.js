import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

function LinkButton({to, text}) {
    return (
        <Link to={to} >{text}</Link>
    )
}

export default LinkButton