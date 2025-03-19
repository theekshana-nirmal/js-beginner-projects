// Expression means the number that is being displayed on the screen
var expression = '';
let display = document.getElementById("display");


// function to display the number on the screen
function press(num){
  expression += num;
  display.value = expression;
  console.log(expression);
}

// function to erase the number on the screen
function erase(){
  expression = "";
  display.value = expression;
  console.log(expression);
}

// function to calculate the expression
function calc(){
  display.value = eval(expression);
  expression = '';
}