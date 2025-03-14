const message = document.getElementById("input-message");

// Add a keydown event listener to the input element
// This function will run every time a key is pressed while the input is focused
message.addEventListener('keydown', function(event){
  if(event.key == 'Enter'){
    passMessage();
  }
});

/// The function for displays the input message and clears the input field.
function passMessage(){
  document.getElementById("display-message").innerText = message.value;
  message.value = "";
}