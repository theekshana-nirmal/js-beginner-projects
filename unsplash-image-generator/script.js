let input = document.getElementById("input");
let grid = document.getElementsByClassName("grid")[0];

input.addEventListener('keydown', function (event){
  if(event.key === 'Enter'){
    loadImg();
  }
});

function loadImg(){
  removeImg();
  const url = "https://api.unsplash.com/search/photos?query=" + input.value + "per_page=9&client_id=Lg1KkuEkjZ1Th2UmhzE35xPydj2MCnefwn_rd3xE528";

  fetch(url)
  .then(response => {
    if(response.ok){
      return response.json();
    }else{
      alert("Error: " + response.status);
    }
  })
  .then(data => {
    const imageNodes = [];
    for(let i = 0; i < data.results.length; i++){
      imageNodes[i] = document.createElement("div");
      imageNodes[i].className = "img";
      imageNodes[i].style.backgroundImage = "url(" + data.results[i].urls.raw + ")";
      imageNodes[i].addEventListener("dblclick", function(){
        window.open(data.results[i].links.download, "_blank")
      })
      grid.appendChild(imageNodes[i]);
    }})
}


function removeImg(){
  grid.innerHTML = "";
}