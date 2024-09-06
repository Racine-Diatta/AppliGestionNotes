// VARIABLES
const addNotes = document.getElementById("addNote");
const note = document.getElementById("note");

const seeNote = document.getElementById("seeNote");

addNotes.addEventListener("click", (event) => {
  event.preventDefault(); // Empéche le rechargement de la page
  let noteContent = note.value;
  console.log(noteContent);
});
