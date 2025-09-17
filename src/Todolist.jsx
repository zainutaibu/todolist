'use client';
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  // Toggle complete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-red-800">To-Do List</h1>

      <div className="flex gap-2 mb-4 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center px-4 py-2 bg-white rounded-lg shadow"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 px-2 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;