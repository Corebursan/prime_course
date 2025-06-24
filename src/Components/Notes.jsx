import { useState, useEffect } from "react";

const Notes = () => {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("inProgress"); // new state for progress

  // Load saved note and status from localStorage when the component mounts
  useEffect(() => {
    const savedNote = localStorage.getItem("myNote");
    const savedStatus = localStorage.getItem("noteStatus");

    if (savedNote) setNote(savedNote);
    if (savedStatus) setStatus(savedStatus);
  }, []);

  const handleSave = () => {
    localStorage.setItem("myNote", note);
    alert("Note saved successfully!");
  };

  const handleViewSaved = () => {
    const savedNote = localStorage.getItem("myNote");
    if (savedNote) {
      setNote(savedNote);
      alert("Note loaded successfully!");
    } else {
      alert("No saved note found.");
    }
  };

  const handleDelete = () => {
    localStorage.removeItem("myNote");
    setNote("");
    alert("Note deleted successfully!");
  };

  const handleProgressToggle = () => {
    const newStatus = status === "inProgress" ? "completed" : "inProgress";
    setStatus(newStatus);
    localStorage.setItem("noteStatus", newStatus);
  };

  return (
    <div id="notes" className="min-h-screen px-4 py-20 mt-1 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">My Notes</h2>

      {/* Static Progress Bar */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="mb-2 text-lg font-medium text-gray-700 text-center">
          {status === "completed" ? "100% Completed" : "0% Completed"}
        </div>
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
          <div
            className={`h-full ${
              status === "completed" ? "bg-green-700" : "bg-green-500"
            }`}
            style={{ width: status === "completed" ? "100%" : "0%" }}
          />
        </div>
      </div>

      <textarea
        rows="10"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full max-w-3xl mx-auto p-4 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 block"
      />

      <div className="text-center mt-4 space-x-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition"
        >
          Save Note
        </button>

        <button
          onClick={handleViewSaved}
          className="px-6 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition"
        >
          View Note
        </button>

        <button
          onClick={handleDelete}
          className="px-6 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
        >
          Delete Note
        </button>

        <button
          onClick={handleProgressToggle}
          className={`px-6 py-2 rounded-full shadow transition ${
            status === "completed"
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {status === "completed" ? "Completed" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export default Notes;
