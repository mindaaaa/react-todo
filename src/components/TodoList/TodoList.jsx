import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '강의 듣기', status: 'active' },
    { id: 2, text: '점심 먹기', status: 'completed' },
    { id: 3, text: '스터디 카페', status: 'completed' },
  ]);
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
