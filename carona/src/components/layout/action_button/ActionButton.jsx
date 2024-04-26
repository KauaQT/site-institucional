import styles from './ActionButton.module.css'

function ActionButton({type, label, onClickEvent}) {
    return (
        <button onClick={onClickEvent} className={styles[type]}>{label}</button>
    )
}

export default ActionButton