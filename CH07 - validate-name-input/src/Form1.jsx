import { useState } from "react";

const nameRegEx = /^[a-zA-Z]+[a-zA-Z-]{1,}$/;

const validateName = (name) => nameRegEx.test(name);

const errorStyle = {
  color: "red"
};

function Form() {
  const [name, setName] = useState("");
  const nameIsValid = validateName(name);

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!nameIsValid && <div style={errorStyle}>Name is invalid</div>}
      </div>
      <div>
        <button type="button">Save</button>
      </div>
    </form>
  );
}

export default Form;
