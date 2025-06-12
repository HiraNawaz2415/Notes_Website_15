// script.js

const params = new URLSearchParams(window.location.search);
const sem = params.get('sem');
document.getElementById("sem-title").innerText = `Semester ${sem} Notes`;

const notesList = document.getElementById("notes-list");

// Mock Data (replace this with dynamic data if using backend)
const mockNotes = {
  1: ["Maths.pdf", "Programming.docx"],
  2: ["Data Structures.pdf"],
  3: ["DBMS.docx", "WebDev.pdf"]
};

if (mockNotes[sem]) {
  mockNotes[sem].forEach(note => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `notes/sem${sem}/${note}`;
    link.innerText = note;
    link.download = note;
    li.appendChild(link);
    notesList.appendChild(li);
  });
} else {
  notesList.innerHTML = "<li>No notes available yet.</li>";
}
