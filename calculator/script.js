var expression = '';
let display = document.getElementById("display");

function press(num){
  expression += num;
  display.value = expression;
  console.log(expression);
}

function erase(){
  expression = "";
  display.value = expression;
  console.log(expression);
}

function calc(){
  display.value = eval(expression);
  expression = '';
}