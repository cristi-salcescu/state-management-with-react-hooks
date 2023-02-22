import { useReducer } from "react";

import ConfirmationModal from "./ConfirmationModal";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useModalContext } from "./ModalContext";
import todosReducer, { initialTodos } from "./reducer";

function App() {
  const [list, dispatch] = useReducer(todosReducer, initialTodos);

  const addTodo = (name) => {
    dispatch({ type: "addTodo", payload: name });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", payload: id });
  };

  const {
    show,
    selectedId,
    showModalAndSelectId,
    closeModal
  } = useModalContext();

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={list} onDelete={showModalAndSelectId} />
      {show && (
        <ConfirmationModal
          onCancel={closeModal}
          onConfirm={() => {
            deleteTodo(selectedId);
            closeModal();
          }}
        />
      )}
    </div>
  );
}

export default App;
