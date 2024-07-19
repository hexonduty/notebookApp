let sendNote = document.getElementById("sendNote");
sendNote.addEventListener("click", function () {
  let listNotes = document.getElementById("listNotes");
  let noteText = document.getElementById("note").value;

  let liElement = document.createElement("li");
  liElement.textContent = noteText;

  listNotes.appendChild(liElement);

  document.getElementById("note").value = ''
});
