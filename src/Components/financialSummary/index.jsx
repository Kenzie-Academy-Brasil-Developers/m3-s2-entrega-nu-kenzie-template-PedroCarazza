import styles from "./style.module.scss";
import { FinancialRecord } from "./financialRecord";

export const FinancialSummary = ({ noteList, removeNote }) => {
  return (
    <section className={styles.summaryBox}>
      <h3 className="title three">Resumo financeiro</h3>
      {noteList.length !== 0 ? (
        <ul>
          {noteList.map((element) => {
            return (
              <FinancialRecord
                key={element.id}
                id={element.id}
                description={element.description}
                value={element.value}
                removeNote={removeNote}
                typeValue={element.typeValue}
              />
            );
          })}
        </ul>
      ) : (
        <h2 className={styles.noneRecord}>
          Você ainda não possui nenhum lançamento
        </h2>
      )}
    </section>
  );
};
