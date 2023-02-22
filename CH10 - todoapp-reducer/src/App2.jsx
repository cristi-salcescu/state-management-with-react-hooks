import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import todosReducer, { initialTodos } from "./reducer";

function App() {
  const [list, dispatch] = useReducer(todosReducer, initialTodos);

  const addTodo = (name) => {
    dispatch({ type: "addTodo", payload: name });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", payload: id });
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={list} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
