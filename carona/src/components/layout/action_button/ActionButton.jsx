import styles from "./ActionButton.module.css";

function ActionButton({ type, iconLabel, label, onClickEvent }) {
  return (
    <button onClick={onClickEvent} className={styles[type]}>
      {iconLabel}
      {label}
    </button>
  );
}

export default ActionButton;
