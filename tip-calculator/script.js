const amount = document.getElementById("amount");
const guests = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

// Arrow function to calculate the tip. It takes the amount, quality and number of guests and calculates the tip for each guest.
calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";

  if(tip === "NaN"){
    tipAmount.innerHTML = "Tip 0$ each";
    showTipAmount();
  }else{
    tipAmount.innerHTML = "Tip " + tip + "$ each";
    showTipAmount();
  }
}

// Function to show the tip amount. Basically, it adds a class to the element and removes it after 5 seconds.
showTipAmount = () => {
  var x = tipAmount;
  x.className = "show-tip";
  setTimeout(function(){
    x.className = x.className.replace("show-tip", "");
  }, 5000);
}