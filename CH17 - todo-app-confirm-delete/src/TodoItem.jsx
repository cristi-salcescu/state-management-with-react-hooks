function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {todo.name}&nbsp;
      <button
        onClick={() => {
          if (onDelete) onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
