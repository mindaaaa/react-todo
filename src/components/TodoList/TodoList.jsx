import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '강의 듣기', status: 'active' },
    { id: 2, text: '점심 먹기', status: 'completed' },
    { id: 3, text: '스터디 카페', status: 'completed' },
  ]);

  const handleAddTodo = (todo) => setTodos([...todos, todo]);
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodoForm addTodo={handleAddTodo} />
    </div>
  );
}
