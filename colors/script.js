// This function generates random red, green, and blue values and uses them to change the background color of the webpage.

function changeColor(){
  // Generate random color values
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Apply the random color to the webpage background
  document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}