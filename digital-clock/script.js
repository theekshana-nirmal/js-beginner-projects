//Call the showTime function when the window is loaded
window.addEventListener("load", showTime);

/* JavaScript code for the digital clock */
function showTime() {
  var date = new Date();
  var dayNumber = date.getDay();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var ampm = (hour > 12) ? "PM" : "AM";
  
  hour = hour % 12;
  hour = (hour == 0) ? hour = 12 : hour;
  hour = (hour < 10) ? "0" + hour : hour;
  let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("ampm").innerHTML = ampm;

  // Update the time every second (recursion)
  setTimeout(showTime, 1000);
}