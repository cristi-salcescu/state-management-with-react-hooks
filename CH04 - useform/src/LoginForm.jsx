import useForm from "./useForm";

function LoginForm() {
  const [state, setField] = useForm({
    username: "",
    password: "",
    rememberMe: false
  });

  const submit = () => {
    console.log(state);
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={setField}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={setField}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="rememberMe"
          checked={state.rememberMe}
          onChange={setField}
        />
        <label>Remember me:</label>
      </div>
      <div>
        <button type="button" onClick={submit}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
