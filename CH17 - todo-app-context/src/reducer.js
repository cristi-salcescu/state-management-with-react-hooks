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

function createReducer(reducers) {
  return function (state, action) {
    const reducer = reducers.find((r) => r.name === action.type);
    return reducer(state, action.payload) ?? state;
  };
}

const todosReducer = createReducer([addTodo, deleteTodo]);

export { todosReducer, initialTodos, addTodo, deleteTodo };
export default todosReducer;
