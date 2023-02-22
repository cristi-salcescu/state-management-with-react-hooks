import { useEffect, useState } from "react";

function DetailsEdit({ item, onSave }) {
  const [name, setName] = useState(item.name);

  useEffect(() => {
    setName(item.name);
  }, [item]);

  const save = () => {
    const newItem = {
      id: item.id,
      name
    };
    onSave(newItem);
  };

  return (
    <form>
      <div>{item.id}</div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={save}>
          Save
        </button>
      </div>
    </form>
  );
}

export default DetailsEdit;
