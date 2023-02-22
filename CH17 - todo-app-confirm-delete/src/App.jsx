import { useReducer, useState } from "react";

import todosReducer, { initialTodos } from "./reducer";

import ConfirmationModal from "./ConfirmationModal";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [list, dispatch] = useReducer(todosReducer, initialTodos);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const addTodo = (name) => {
    dispatch({ type: "addTodo", payload: name });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", payload: id });
  };

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const showModalAndSelectId = (id) => {
    setSelectedId(id);
    showModal();
  };

  const closeModalAndDeleteSelectedId = () => {
    deleteTodo(selectedId);
    closeModal();
  };

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={list} onDelete={showModalAndSelectId} />
      {show && (
        <ConfirmationModal
          onCancel={closeModal}
          onConfirm={closeModalAndDeleteSelectedId}
        />
      )}
    </div>
  );
}

export default App;
