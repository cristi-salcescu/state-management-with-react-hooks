import { useState } from "react";

function TodoForm({ onAdd }) {
  const [name, setName] = useState("");

  const submit = () => {
    if (onAdd) onAdd(name);
    setName("");
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={submit}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
