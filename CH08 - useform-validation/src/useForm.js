import { useState } from "react";

const validateValue = (value, name, validation) => {
  if (validation.required && !value.length) return `${name} is mandatory`;
  if (validation.pattern && !validation.pattern.test(value))
    return `${name} has invalid`;
  return;
};

function useForm(fields, validations) {
  const [values, setValues] = useState(fields);
  const [errors, setErrors] = useState({});

  const setField = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setValues((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const validateFieldByName = (name) => {
    const value = values[name];
    const validation = validations[name];
    const errorMsg = validateValue(value, name, validation);
    setErrors((prevState) => ({ ...prevState, [name]: errorMsg }));
    return !errorMsg;
  };

  const validate = () => {
    const fieldNames = Object.keys(fields);
    const validationResults = fieldNames.map(validateFieldByName);
    const hasError = validationResults.includes(false);
    return !hasError;
  };

  return { values, errors, setField, validate };
}

export default useForm;
