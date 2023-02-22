import { useState } from "react";

const options = [
  { id: 1, name: "Option1" },
  { id: 2, name: "Option2" },
  { id: 3, name: "Option3" }
];

function toggleOption(options, id, checked) {
  return options.map((option) =>
    option.id === id ? { ...option, checked } : { ...option, checked: false }
  );
}

function RadioList() {
  const [checkedList, setCheckedList] = useState(options);

  const changeList = (id, checked) => {
    setCheckedList((checkedList) => toggleOption(checkedList, id, checked));
  };

  return (
    <form>
      {checkedList.map(({ id, name, checked }) => (
        <label key={id}>
          <input
            type="radio"
            name="options"
            value={id}
            checked={checked}
            onChange={(e) => changeList(id, e.target.checked)}
          />
          {name}
        </label>
      ))}
    </form>
  );
}
export default RadioList;
