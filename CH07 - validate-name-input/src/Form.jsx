import { useState } from "react";

const nameRegEx = /^[a-zA-Z]+[a-zA-Z-]{1,}$/;

const validateName = (name) => {
  if (!name.length) return "Name is mandatory";
  if (!nameRegEx.test(name)) return "Name has invalid";
  return;
};

const errorStyle = {
  color: "red"
};

function Form() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const changeName = (newName) => {
    setName(newName);
    setNameError("");
  };

  const submit = () => {
    const errorMsg = validateName(name);
    setNameError(errorMsg);

    if (!errorMsg) {
      console.log("submit");
    }
  };

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
        {nameError && <div style={errorStyle}>{nameError}</div>}
      </div>
      <div>
        <button type="button" onClick={submit}>
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
