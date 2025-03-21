const create_box = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
var flashcards = document.getElementsByClassName("flashcards")[0];

function showCreateBox() {
  create_box.style.display = "block";
}

function hideCreateBox() {
  create_box.style.animation = "pop-down 0.25s ease forwards";
  setTimeout(() => {
    create_box.style.display = "none";
    create_box.style.animation = "";
  }, 300);
}

function addFlashcard() {
  const q_text = question.value;
  const a_text = answer.value;

  const card = document.createElement("div");
  card.className = "flashcard";

  const q = document.createElement("h3");
  const a = document.createElement("p");

  q.textContent = q_text;
  a.textContent = a_text;

  card.appendChild(q);
  card.appendChild(a);

  flashcards.appendChild(card);
}

function delFlashcards() {
  flashcards.style.animation = "pop-down 0.25s ease forwards";
  setTimeout(() => {
    flashcards.innerHTML = "";
    flashcards.style.animation = "";
  }, 300);
}
