var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];

var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

var i = 0;

xIcon.addEventListener("click", function () {
  typeNote();
});
checkIcon.addEventListener("click", function () {
  createNote();
});

function typeNote() {
  if (container3.style.display === "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}

function createNote() {
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = noteText;

  node0.setAttribute(
    "style",
    "width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 1px 1px 24px 1px;"
  );

  node0.style.backgroundColor = color();
  node0.style.margin = margin();
  node0.style.transform = rotate();

  node0.appendChild(node1);

  container2.insertAdjacentElement("beforeend", node0);
  
  node0.addEventListener("mouseenter", function () {
    node0.style.transform = "scale(1.05)";
  }
  );
  node0.addEventListener("mouseleave", function () {
    node0.style.transform = rotate();
  });

  node0.addEventListener("dblclick", function () {
    node0.remove();
  });

  document.getElementById("note-text").value = "";
}

//This function creates a new note element and appends it to the container2.
function margin() {
  var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

//This function generates a random rotation degree from a predefined list of degrees.
function rotate() {
  var random_degree = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-8deg)",
  ];
  return random_degree[Math.floor(Math.random() * random_degree.length)];
}

//This function generates a random color from a predefined list of colors.
function color() {
  var random_colors = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];

  if (i > random_colors.length - 1) {
    i = 0;
  }
  return random_colors[i++];
}
