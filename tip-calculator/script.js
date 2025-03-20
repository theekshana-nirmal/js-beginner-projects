const amount = document.getElementById("amount");
const guests = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

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

showTipAmount = () => {
  var x = tipAmount;
  x.className = "show-tip";
  setTimeout(function(){
    x.className = x.className.replace("show-tip", "");
  }, 5000);
}