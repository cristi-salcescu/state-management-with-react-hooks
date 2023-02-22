import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 1, name: "clean house" },
  { id: 2, name: "do shopping" }
];

function addTodo(list, name) {
  const todo = {
    id: Date.now(),
    name
  };
  const newList = [...list, todo];
  return newList;
}

function deleteTodo(list, id) {
  const newList = list.filter((todo) => todo.id !== id);
  return newList;
}

function todosReducer(list, action) {
  switch (action.type) {
    case "add_todo":
      return addTodo(list, action.payload);
    case "delete_todo":
      return deleteTodo(list, action.payload);
    default:
      return list;
  }
}

function App() {
  const [list, dispatch] = useReducer(todosReducer, initialTodos);

  const addTodo = (name) => {
    dispatch({ type: "add_todo", payload: name });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "delete_todo", payload: id });
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={list} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
