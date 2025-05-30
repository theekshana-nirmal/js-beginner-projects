const hex_numbers = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function to generate a random hexadecimal color code and apply it to the webpage background
function changeColor(){
  var hex_code = "";

  // Loop 6 times to generate a 6-digit hexadecimal code
  for(let i = 0; i < 6; i++){
    let random_index = Math.floor(Math.random() * hex_numbers.length);
    hex_code += hex_numbers[random_index];
  }
  
  document.getElementById("hex-code").innerHTML = hex_code;
  document.getElementsByTagName("body")[0].style.backgroundColor = "#" + hex_code;
}