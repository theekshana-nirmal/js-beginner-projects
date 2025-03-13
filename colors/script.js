var index = 0;

function changeColor(){
  const colors = ["red", "yellow", "green"];
  document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++];

  if(index > colors.length-1){
    index = 0;
  }
}