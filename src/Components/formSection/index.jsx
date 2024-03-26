import { useState } from "react";
import { Input } from "../inputs";
import { Select } from "../select";
import styles from "./style.module.scss";

export const FormSection = ({ addNote }) => {
  const [description, setDescriptionInput] = useState("");
  const [value, setValueInput] = useState("");
  const [typeValue, setTypeValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    addNote({ description, value, typeValue });

    setDescriptionInput("");
    setValueInput("");
    setTypeValue("");
  };

  

  return (
    <section className={styles.formSection}>
      <form className={styles.form} onSubmit={submit}>
        <Input
          type="text"
          name="description"
          label="Descrição"
          id="description"
          placeholder="Digite aqui sua descrição"
          value={description}
          setValue={setDescriptionInput}
        />

        <small className="body">Ex: Compra de roupas</small>

        <Input
          type="number"
          name="value"
          label="Valor (R$)"
          id="value"
          placeholder="Digite aqui o valor"
          value={value}
          setValue={setValueInput}
          step="0.01"
        />

        <div className={styles.selectSection}>
          <p className="headline">Tipo de valor</p>

          <Select name="typeValue" id="typeValue" typeValue={typeValue} setTypeValue={setTypeValue}>
            <option disabled value="">Selecione o tipo do valor</option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </Select>

          <button className="btn insert" type="submit">
            Inserir valor
          </button>
        </div>
      </form>
    </section>
  );
};
