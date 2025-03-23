import { IoAdd } from 'react-icons/io5';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    addTodo({ id: uuidv4(), text, status: 'active' });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력하세요'
        value={text}
        onChange={handleChange}
      />
      <button type='submit'>
        <IoAdd />
      </button>
    </form>
  );
}
