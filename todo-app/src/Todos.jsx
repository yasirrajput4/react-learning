import { useState } from "react";

function Todos() {
  const [taskText, setTaskText] = useState("");
  const [todosList, setTodosList] = useState([]);

  function handleInputChange(e) {
    setTaskText(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();

    if (taskText.trim() === "") {
      alert("Please enter a task.");
      setTaskText("");
      return;
    }

    const newTodo = { text: taskText.trim() };
    setTodosList((prevTodos) => [...prevTodos, newTodo]);
    setTaskText("");
  }

  function handleDeleteTask(indexToDelete) {
    setTodosList((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToDelete),
    );
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
              value={taskText}
              onChange={handleInputChange}
              type="text"
              placeholder="What needs to be done?"
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium text-sm px-4 py-2.5 rounded-xl shadow transition-transform duration-100 ease-in-out cursor-pointer"
            >
              Add Task
            </button>
          </div>
        </form>

        <ul className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
          {todosList.length === 0 ? (
            <li className="text-center py-6 text-slate-500 text-sm border border-dashed border-slate-700/60 rounded-xl">
              No tasks added yet!
            </li>
          ) : (
            todosList.map((todo, index) => (
              <li
                key={index}
                className="bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 text-sm flex items-center justify-between hover:border-slate-600 transition-colors duration-200 gap-2"
              >
                <span className="break-all">{todo.text}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteTask(index)}
                  className="text-xs text-slate-400 hover:text-rose-400 hover:bg-rose-950/50 px-2 py-1 rounded-lg transition-colors duration-200 shrink-0 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
