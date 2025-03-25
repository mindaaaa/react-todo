import React from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

export default function Todo({ todo, updateChecked, deleteTodo }) {
  const { id, text, status } = todo;
  const handleChecked = (e) => {
    const status = e.target.checked ? 'done' : 'todo';
    updateChecked({ ...todo, status });
  };

  const handleDelete = () => deleteTodo(todo);

  return (
    <li>
      <input
        id={id}
        type='checkbox'
        checked={status === 'done'}
        onChange={handleChecked}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <FaDeleteLeft />
      </button>
    </li>
  );
}
