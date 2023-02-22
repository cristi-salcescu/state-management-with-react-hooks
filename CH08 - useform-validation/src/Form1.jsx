import useForm from "./useForm";

const nameRegEx = /^[a-zA-Z]+[a-zA-Z-]{1,}$/;

const errorStyle = {
  color: "red"
};

function Form() {
  const { values, errors, setField, validate } = useForm(
    {
      name: ""
    },
    {
      name: {
        required: true,
        pattern: nameRegEx
      }
    }
  );

  const submit = () => {
    const isvalid = validate();

    if (isvalid) {
      console.log(values);
    }
  };

  return (
    <form>
      <div>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={setField}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}
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
