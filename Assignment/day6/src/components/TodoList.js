import React, { useState } from 'react'

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const addTodo = () => {
      if (inputValue.trim() === '') return;
      setTodos([...todos, inputValue]);
      setInputValue('');
    };
  
    const removeTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    };
  
  
    return (
    <fragment style={{ padding: '20px' }} >
         <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add Todo"
        style={{ marginRight: '10px' }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </fragment>
  )
}
