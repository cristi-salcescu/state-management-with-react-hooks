function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
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
      ))}
    </ul>
  );
}

export default TodoList;
