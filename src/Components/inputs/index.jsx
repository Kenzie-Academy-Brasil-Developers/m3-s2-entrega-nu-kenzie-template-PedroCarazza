import styles from "./style.module.scss"

export const Input = ({label, id, type, placeholder, value, setValue, step}) => {
  return (
    <div className={styles.inputs}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.inputBox}
        type={type}
        name={id}
        onChange={(event) => setValue(event.target.value)}
        id={id}
        placeholder={placeholder}
        step={step}
        value={value}
        required
      />
    </div>
  );
};
