import { useState } from 'react';
import '../assets/css/Todos.css'; // Import your Todos.css file for styling

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEditTodo = (id, text) => {
    setEditTodoId(id);
    setEditValue(text);
  };

  const handleUpdateTodo = () => {
    if (editValue.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === editTodoId ? { ...todo, text: editValue } : todo
      ));
      setEditTodoId(null);
      setEditValue('');
    }
  };

  return (
    <div className="todos-container">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddTodo}>Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {editTodoId === todo.id ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={handleUpdateTodo}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleUpdateTodo();
                }}
              />
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button className="edit-button" onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                  <button className="complete-button" onClick={() => handleToggleComplete(todo.id)}>
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
