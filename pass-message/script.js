const message = document.getElementById("input-message");

function passMessage(){
  document.getElementById("display-message").innerText = message.value;
  console.log(message);
  message.value = "";
}