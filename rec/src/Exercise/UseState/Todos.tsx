import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

function Todos() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [state, setState] = useState<string>("");

  const addTodo = (task: string) => {
    if (!task.trim()) return; // Prevent adding empty tasks
    const newTodo: Todo = {
      id: todo.length + 1,
      task: task.trim(),
      completed: false,
    };
    setTodo((todo) => [...todo, newTodo]);
    setState(""); // Clear input after adding
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-5 bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Todo List</h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter a task..."
            className="flex-grow px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => addTodo(state)}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todo.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
            >
              <span className="text-gray-800">{item.task}</span>
              <span
                className={`ml-2 px-2 py-1 rounded-md text-sm font-semibold ${
                  item.completed
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {item.completed ? "Completed" : "Pending"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
