const params = new URLSearchParams(window.location.search);
const sem = params.get('sem');
document.getElementById("sem-title").innerText = `Semester ${sem} Notes`;

const notesList = document.getElementById("notes-list");

// You can expand this mock data or fetch it dynamically later
const mockNotes = {
  1: ["Programming Fundamentals.pdf", "IT.pdf", "Functional English.pdf", "Islamiat.pdf", "Calculus.pdf", "Applied Physics.pdf"],
  2: ["OOP.pdf", "Discrete Structure.pdf", "DLD.pdf", "Statistics.pdf", "Communication Skills.pdf"],
  3: ["Assembly Language.pdf", "Data Structure.pdf", "Computer Networking.pdf", "Academic Writing.pdf", "Principles of Management.pdf", "Pak Study.pdf"],
  5: ["RE and DFA.pdf", "Discrete Structure.pdf", "DLD.pdf", "Statistics.pdf", "Communication Skills.pdf"],
  // Add other semesters similarly...
};

if (mockNotes[sem]) {
  mockNotes[sem].forEach(note => {
    const li = document.createElement('li');
    li.classList.add("note-item");

    const link = document.createElement('a');
    link.href = `notes/sem${sem}/${note}`;
    link.innerText = `📘 ${note}`;
    link.download = note;
    link.classList.add("note-link");

    li.appendChild(link);
    notesList.appendChild(li);
  });
} else {
  notesList.innerHTML = `<li class="no-notes">No notes available yet for Semester ${sem}.</li>`;
}
