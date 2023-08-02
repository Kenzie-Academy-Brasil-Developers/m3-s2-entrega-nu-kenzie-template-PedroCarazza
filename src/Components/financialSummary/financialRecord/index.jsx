import styles from "./style.module.scss"

export const FinancialRecord = ({description, value, removeNote, id, typeValue}) => {
  return (
    <li>
      <div className={styles.recordBox}>
        <div className={styles.description}>
          <h3 className="title three">{description}</h3>
          <p className="body">{typeValue}</p>
        </div>
        <div className={styles.value}>
          <span>R$ {value}</span>
          <button className="btn delete" onClick={() => removeNote(id)}>Excluir</button>
        </div>
      </div>
    </li>
  );
};
