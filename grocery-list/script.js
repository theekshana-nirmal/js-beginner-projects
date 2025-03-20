const inputItem = document.getElementById("inputItem");
const clearItems = document.getElementById("clearItems");
const allItems = document.getElementById("allItems");

inputItem.addEventListener("keydown", function(event){
  if(event.key == "Enter"){
    addItem();
  }
});

clearItems.addEventListener("click", function(){
  allItems.innerHTML = "";
});

function addItem(){
  var h2 = document.createElement("h2");
  h2.innerHTML = "- " + inputItem.value;

  h2.addEventListener("click", function(){
    h2.style.textDecoration = "line-through";
  });
  allItems.insertAdjacentElement("beforeend", h2);

  inputItem.value = "";
}
