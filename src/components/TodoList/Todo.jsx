import React from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

export default function Todo({ todo, updateChecked, deleteTodo }) {
  const handleDelete = () => deleteTodo(todo);
  return (
    <li>
      <input type='checkbox' />
      <label htmlFor='checkbox'>{todo.text}</label>
      <button onClick={handleDelete}>
        <FaDeleteLeft />
      </button>
    </li>
  );
}
