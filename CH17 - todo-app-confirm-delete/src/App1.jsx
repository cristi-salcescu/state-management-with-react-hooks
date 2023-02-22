import { useState, useReducer } from "react";
import todosReducer, { initialTodos } from "./reducer";

import ConfirmationModal from "./ConfirmationModal";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [list, dispatch] = useReducer(todosReducer, initialTodos);
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div>
      <TodoForm onAdd={() => {}} />
      <TodoList todos={list} onDelete={showModal} />
      {show && (
        <ConfirmationModal
          onCancel={closeModal}
          onConfirm={() => {
            console.log("delete id");
          }}
        />
      )}
    </div>
  );
}

export default App;
