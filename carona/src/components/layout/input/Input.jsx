import { Link } from 'react-router-dom'
import styles from './Input.module.css'

function Input(props) {
    return (
        <div className={styles['box-input']}>
            <h4>{props.label}</h4>

            <div className={styles['div-input']}>
                <input type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} onChange={props.onChangeEvent} />

                <div className={styles['div-icon']} onClick={props.iconHandleEvent}>
                    {props.icon}
                </div>
            </div>

            <Link to={props.linkTo}>{props.textLink}</Link>
        </div>
    )
}

export default Input