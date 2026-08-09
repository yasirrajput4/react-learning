import { useState } from "react";
import "./index.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();

    if (taskInput.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: taskInput.trim(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTaskInput("");
  }

  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl w-full max-w-md flex flex-col gap-5">
        <h1 className="text-xl font-bold text-center text-blue-400 tracking-wide">
          Todo List
        </h1>

        <form onSubmit={handleAddTask}>
          <div className="flex gap-2">
            <input
              value={taskInput}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter Task"
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium text-sm px-4 py-2.5 rounded-xl shadow transition-transform duration-100 ease-in-out"
            >
              Add Task
            </button>
          </div>
        </form>

        <ul className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 text-sm flex items-center hover:border-slate-600 transition-colors duration-200"
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
