import { useState } from 'react';
export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">Add</button>
    </form>
  );
}