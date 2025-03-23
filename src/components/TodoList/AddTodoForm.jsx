import { IoAdd } from 'react-icons/io5';
import React, { useState } from 'react';

export default function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: '임시 저장', text, status: 'active' });
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
