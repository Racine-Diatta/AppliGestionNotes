// VARIABLES
const addNotes = document.getElementById("addNote");
const note = document.getElementById("note");
const seeNote = document.getElementById("seeNote");
//-----------------------------------
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "rebeccapurple",
  "violet",
];

//---------------------------------------

// FUNCTIONS

function updateLocalStorage() {
  var noteContent = [];
  addNotes.addEventListener("click", (event) => {
    event.preventDefault(); // Empéche le rechargement de la page
    //  noteContent.push  (note.value) ; //récupère le contenu de l'input
    noteContent.push(note.value); //récupère le contenu de l'input
    //-------------------------------------------------------------------------
    localStorage.setItem("noteContent", JSON.stringify(noteContent));
    //-----------------------------------------------------------------------
  });
}
updateLocalStorage();

function changeColor() {
  document.body.style.background = colors[Math.floor(7 * Math.random())];
}

// MAINSCRIPT
addNotes.addEventListener("click", changeColor);
//-------------------
