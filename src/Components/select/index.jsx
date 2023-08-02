export const Select = ({ name, id, children, setTypeValue, typeValue }) => {
  return (
    <div>
      <select
        required
        value={typeValue}
        name={name}
        id={id}
        onChange={(event) => setTypeValue(event.target.value)}
      >
        {children}
      </select>
    </div>
  );
};
