import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncreaseClick() {
    if (count >= 5) return;

    setCount((prevCount) => prevCount + 1);
  }

  function handleDecreaseClick() {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-6 max-w-xs w-full">
        <div className="w-full text-center bg-blue-600 text-white font-black text-3xl py-4 px-6 rounded-xl shadow-md">
          Count: {count}
        </div>

        <div className="flex gap-3 w-full">
          <button
            className="flex-1 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-bold py-3 px-4 rounded-xl shadow transition-all"
            onClick={handleIncreaseClick}
          >
            Increase
          </button>

          <button
            className="flex-1 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-bold py-3 px-4 rounded-xl shadow transition-all"
            onClick={handleDecreaseClick}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
