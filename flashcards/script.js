//TODO: Only show answer when clicked on the flashcard

const create_box = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
var flashcards = document.getElementsByClassName("flashcards")[0];

// Get flashcards from local storage and if there are none, create an empty array
let contentArray = localStorage.getItem("flashcards")
  ? JSON.parse(localStorage.getItem("flashcards"))
  : [];

// Create a new local storage item if there are no flashcards
localStorage.setItem("flashcards", JSON.stringify(contentArray));
getFlashcards();

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

  contentArray.push({ q: q_text, a: a_text });
  localStorage.setItem("flashcards", JSON.stringify(contentArray));

  const card = document.createElement("div");
  card.className = "flashcard";

  const q = document.createElement("h3");
  const a = document.createElement("p");

  q.textContent = q_text;
  a.textContent = a_text;

  // Show answer when clicked on the flashcard
  card.addEventListener("click", () => {
    a.style.display = a.style.display === "block" ? "none" : "block";
  });

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

  localStorage.removeItem("flashcards");
}

// Get flashcards from local storage and display them
function getFlashcards() {
  const storedFlashcards = localStorage.getItem("flashcards");
  contentArray = storedFlashcards ? JSON.parse(storedFlashcards) : [];
  contentArray.forEach((content) => {
    const card = document.createElement("div");
    card.className = "flashcard";

    const q = document.createElement("h3");
    const a = document.createElement("p");

    q.textContent = content.q;
    a.textContent = content.a;

    // Show answer when clicked on the flashcard
    card.addEventListener("click", () => {
      a.style.display = a.style.display === "block" ? "none" : "block";
    });

    card.appendChild(q);
    card.appendChild(a);

    flashcards.appendChild(card);
  });
}
