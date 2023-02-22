import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 1, name: "clean house" },
  { id: 2, name: "do shopping" }
];

function App() {
  const [list, setList] = useState(initialTodos);

  const addTodo = (name) => {
    const todo = {
      id: Date.now(),
      name
    };
    const newList = [...list, todo];
    setList(newList);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={list} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
