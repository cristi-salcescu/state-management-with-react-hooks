import { useState } from "react";

function useForm(fields) {
  const [state, setState] = useState(fields);

  const setField = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return [state, setField];
}

export default useForm;
