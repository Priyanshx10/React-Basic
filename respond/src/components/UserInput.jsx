import React, { useState } from 'react';

const UserInput = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 1, task: 'eat', completed: false },
    { id: 2, task: 'sleep', completed: false },
    { id: 3, task: 'meet', completed: false },
    { id: 4, task: 'beat', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTodoItems([
        ...todoItems,
        { id: todoItems.length + 1, task: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todoItems.map((item) => (
          <li
            key={item.id}
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
              color: item.completed ? 'gray' : 'inherit',
            }}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTaskCompletion(item.id)}
            />
            {item.task}
            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInput;