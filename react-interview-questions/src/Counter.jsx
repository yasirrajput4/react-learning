import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // ❌ THIS INCREMENTS BY ONLY 1 (NOT 3):
    // React state works like a "snapshot".
    // During this render, the value of 'count' remains fixed at 0.

    setCount(count + 1); // React sees: setCount(0 + 1) -> state set to 1
    setCount(count + 1); // React sees: setCount(0 + 1) -> state set to 1 again
    setCount(count + 1); // React sees: setCount(0 + 1) -> state set to 1 again

    // Result: The count increases by only 1 after click.

    // -------------------------------------------------------------

    // ✅ TO INCREMENT BY 3, USE A FUNCTIONAL UPDATE:
    // Passing a function gives you the latest pending state value.

    // setCount((prev) => prev + 1); // Added to queue: 0 + 1 = 1
    // setCount((prev) => prev + 1); // Added to queue: 1 + 1 = 2
    // setCount((prev) => prev + 1); // Added to queue: 2 + 1 = 3
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700 w-80">
        <h1 className="text-xl font-semibold text-slate-300">Counter App</h1>

        <p className="text-6xl font-bold text-indigo-400 my-2">{count}</p>

        <button
          className="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-600/30"
          onClick={handleClick}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
