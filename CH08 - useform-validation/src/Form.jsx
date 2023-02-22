import useForm from "./useForm";
import Input from "./Input";

const nameRegEx = /^[a-zA-Z]+[a-zA-Z-]{1,}$/;
const emailRegEx = /^(.+)@(.+)$/;

function Form() {
  const { values, errors, setField, validate } = useForm(
    {
      fname: "",
      lname: "",
      email: ""
    },
    {
      fname: {
        required: true,
        pattern: nameRegEx
      },
      lname: {
        required: true,
        pattern: nameRegEx
      },
      email: {
        required: true,
        pattern: emailRegEx
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
        <Input
          name="fname"
          label="first name"
          value={values.fname}
          error={errors.fname}
          onChange={setField}
        />
      </div>
      <div>
        <Input
          name="lname"
          label="last name"
          value={values.lname}
          error={errors.lname}
          onChange={setField}
        />
      </div>
      <div>
        <Input
          name="email"
          value={values.email}
          error={errors.email}
          onChange={setField}
        />
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
