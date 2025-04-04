let input = document.getElementById("input");
let grid = document.getElementsByClassName("grid")[0];

input.addEventListener('keydown', function (event){
  if(event.key === 'Enter'){
    loadImg();
  }
});

function loadImg(){}