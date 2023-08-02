import styles from "./style.module.scss";

export const SumSection = ({noteList}) => {
  return (
    <section className={styles.sumBox}>
      <div className={styles.divBox}>
        <h3 className="title three">Valor total:</h3>
        <small className="body">O valor se refere ao saldo</small>
      </div>
      <div className={styles.totalBox}>
        <span className="title three">R${noteList.reduce((preventValue, element) => { 
          const sumValues = element.typeValue === "entrada" ? preventValue + Number(element.value) : preventValue - Number(element.value)
          return sumValues  
        }, 0)}</span>
      </div>
    </section>
  );
};
