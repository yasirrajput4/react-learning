import { useState } from "react";

function Notes() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDecs(e) {
    setDesc(e.target.value);
  }

  function handleClick() {
    // console.log(title);
    // console.log(desc);

    let allNotes = { title, desc };
    notes.push(allNotes);
    console.log(allNotes);

    setTitle("");
    setDesc("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto my-8 p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-100"
    >
      <div className="space-y-3">
        <input
          onChange={handleTitle}
          type="text"
          placeholder="Enter Title"
          value={title}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <input
          onChange={handleDecs}
          value={desc}
          type="text"
          placeholder="Enter Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
      <button
        onClick={handleClick}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition-colors duration-200 active:scale-[0.98]"
      >
        Add Note
      </button>
    </form>
  );
}

export default Notes;
