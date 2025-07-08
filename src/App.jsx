import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  function addTodo(text) {
    setTodos([...todos, { text, completed: false }]);
  }
  function toggleTodo(index) {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
