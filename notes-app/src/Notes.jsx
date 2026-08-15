import { useState } from "react";

function Notes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notesList, setNotesList] = useState([]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleAddNote(e) {
    e.preventDefault();

    if (!title.trim() && !description.trim()) {
      alert("Please enter a title or description for your note.");
      setTitle("");
      setDescription("");
      return;
    }

    const newNote = { title, description };
    setNotesList((prevNotes) => [...prevNotes, newNote]);

    setTitle("");
    setDescription("");
  }

  function handleDeleteNote(indexToDelete) {
    setNotesList((prevNotes) =>
      prevNotes.filter((_, index) => index !== indexToDelete),
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Quick Notes
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Capture your ideas, tasks, and quick thoughts
          </p>
        </div>

        {/* Input Form Card */}
        <form
          onSubmit={handleAddNote}
          className="p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/50 space-y-4 border border-slate-800"
        >
          <div className="space-y-3">
            <input
              onChange={handleTitleChange}
              type="text"
              placeholder="Note title..."
              value={title}
              className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700/70 rounded-xl text-slate-100 placeholder-slate-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200"
            />

            <textarea
              onChange={handleDescriptionChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleAddNote(e);
                }
              }}
              value={description}
              rows="3"
              placeholder="Write your note here... (Press Enter to save, Shift+Enter for a new line)"
              className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700/70 rounded-xl text-slate-100 placeholder-slate-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Save Note</span>
          </button>
        </form>

        {/* Render Notes List */}
        <div className="space-y-3">
          {notesList.length === 0 ? (
            <div className="text-center py-10 px-4 border-2 border-dashed border-slate-800 rounded-2xl bg-slate-900/40">
              <p className="text-sm text-slate-500 font-medium">
                No notes available. Add a new note above to get started!
              </p>
            </div>
          ) : (
            notesList.map((note, index) => (
              <div
                key={index}
                className="group relative p-5 bg-slate-900 rounded-2xl shadow-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 flex justify-between items-start gap-4 border-l-4 border-l-blue-500 overflow-hidden"
              >
                <div className="space-y-1 flex-1 min-w-0">
                  {note.title && (
                    <h3 className="font-bold text-slate-100 text-base leading-snug wrap-break-word">
                      {note.title}
                    </h3>
                  )}
                  {note.description && (
                    <p className="text-slate-400 text-sm leading-relaxed wrap-break-word font-normal">
                      {note.description}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteNote(index)}
                  className="shrink-0 text-slate-400 hover:text-rose-400 hover:bg-rose-950/50 p-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
                  title="Delete note"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;
