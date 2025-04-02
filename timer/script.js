var timer = document.getElementById("timer");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var milliseconds = document.getElementById("milliseconds");

var start = false;
var intervalId;

timer.addEventListener("click", function() {
  if(start == false) {
    start = true;
    intervalId = setInterval(startTimer, 10);
  } else {
    start = false;
    clearInterval(intervalId);
  }
});



var minutes_now = 0;
var seconds_now = 0;
var milliseconds_now = 0;

function startTimer() {
  if(milliseconds_now < 99) {
    milliseconds_now++;
    if(milliseconds_now < 10) {
      milliseconds.innerHTML = "0" + milliseconds_now;
    } else {
      milliseconds.innerHTML = milliseconds_now;
    }
  }else {
    milliseconds_now = 0;
    if(seconds_now < 59) {
      seconds_now++;
      if(seconds_now < 10) {
        seconds.innerHTML = "0" + seconds_now;
      }
      else {
        seconds.innerHTML = seconds_now;
      }
    } else {
      seconds_now = 0;
      if(minutes_now < 59) {
        minutes_now++;
        if(minutes_now < 10) {
          minutes.innerHTML = "0" + minutes_now;
        } else {
          minutes.innerHTML = minutes_now;
        }
      } else {
        minutes_now = 0;
      }
    }
  }
}