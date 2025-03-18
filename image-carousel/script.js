var index = 0;

function changeImage(i){
  index += i;

  let dots = document.getElementsByClassName("dot");
  console.log(dots);

  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if(index > dots.length - 1){
    index = 0;
  }

  if(index < 0){
    index = dots.length - 1;
  }

  dots[index].className += " active";
}

changeImage(0);