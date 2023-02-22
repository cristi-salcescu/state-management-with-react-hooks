const errorStyle = {
  color: "red"
};

function Input({ value, name, label, error, onChange }) {
  return (
    <>
      <input
        placeholder={label || name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div style={errorStyle}>{error}</div>}
    </>
  );
}

export default Input;
