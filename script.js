//--------------------------------------------------------------

//                                                   VARIABLES

//-------------------------------------------------------------
const addNotes = document.getElementById("addNote");
const note = document.getElementById("note");
const seeNote = document.getElementById("seeNote");
const spanDisplay = document.getElementById("spanDisplay");
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

//--------------------------------------------------------------

//                                                   FUNCTIONS

//-------------------------------------------------------------

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

function displayItemNote() {
  const iii = JSON.parse(localStorage.getItem("noteContent"));

  for (let index = 0; index < iii.length; index++) {
    var element = iii[index];
    console.log(element);
    var liDisplay = document.createElement("li");
    liDisplay.textContent = element;
    spanDisplay.appendChild(liDisplay);
  }
}
function changeColor() {
  document.body.style.background = colors[Math.floor(7 * Math.random())];
}

//--------------------------------------------------------------

//                                                   MAIN SCRIPT

//-------------------------------------------------------------
seeNote.addEventListener("click", () => {
  displayItemNote();
});

addNotes.addEventListener("click", changeColor);

updateLocalStorage();
//-------------------
