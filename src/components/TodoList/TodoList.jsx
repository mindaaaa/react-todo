import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm.jsx';
import Todo from './Todo.jsx';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '강의 듣기', status: 'todo' },
    { id: 2, text: '점심 먹기', status: 'done' },
    { id: 3, text: '스터디 카페', status: 'done' },
  ]);

  const handleAddTodo = (todo) => setTodos([...todos, todo]);
  const handleDeleteTodo = (deleteTodo) => {
    setTodos(todos.filter((todo) => todo !== deleteTodo));
  };
  const handleChecked = (updateTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
    );
  };

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            updateChecked={handleChecked}
            deleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
      <AddTodoForm addTodo={handleAddTodo} />
    </div>
  );
}

// Todo 삭제 버튼 구현
// 1. Todo Component 구현
// Todo의 삭제 버튼이 눌리면 해당 데이터 id를 return함
// checkbox, text, button
// 2. 받아온 id를 기준으로 filter함
