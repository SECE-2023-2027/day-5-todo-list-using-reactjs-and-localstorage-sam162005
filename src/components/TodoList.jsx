export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) return <p className="empty-msg">No todos yet!</p>;
  return (
    <ul className="todo-list">
      {todos.map((todo, i) => (
        <li key={i} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => onToggle(i)}>{todo.text}</span>
          <button onClick={() => onDelete(i)} className="todo-del-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
}