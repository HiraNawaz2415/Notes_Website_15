const params = new URLSearchParams(window.location.search);
const sem = params.get('sem');
document.getElementById("sem-title").innerText = `Semester ${sem} Notes`;

const notesList = document.getElementById("notes-list");

// You can expand this mock data or fetch it dynamically later
const mockNotes = {
  1: ["Programming Fundamentals book.pdf", "IT notes.pdf", "Functional English pastpaper.pdf", "Islamiat book.pdf", "Calculus notes.pdf", "Applied Physics pastpaper.pdf"],
  2: ["OOP book.pdf", "Discrete Structure notes.pdf", "DLD pastpaper.pdf", "Statistics book.pdf", "Communication Skills notes.pdf"],
  3: ["Assembly Language book.pdf", "Data Structure notes.pdf", "Computer Networking pastpaper.pdf", "Academic Writing book.pdf", "Principles of Management notes.pdf", "Pak Study pastpaper.pdf"],
  5: ["RE and DFA book.pdf", "Discrete Structure notes.pdf", "DLD pastpaper.pdf", "Statistics book.pdf", "Communication Skills notes.pdf"],
  // Add other semesters similarly...
};

// Helper function to group and display notes by keyword
function displayNotesByCategory(title, keyword) {
  const filtered = mockNotes[sem].filter(note => note.toLowerCase().includes(keyword));
  if (filtered.length > 0) {
    const heading = document.createElement('h3');
    heading.innerText = title;
    notesList.appendChild(heading);

    filtered.forEach(note => {
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
  }
}

if (mockNotes[sem]) {
  displayNotesByCategory("📚 Books", "book");
  displayNotesByCategory("📝 Notes", "note");
  displayNotesByCategory("📄 Past Papers", "past");
} else {
  notesList.innerHTML = `<li class="no-notes">No notes available yet for Semester ${sem}.</li>`;
}
