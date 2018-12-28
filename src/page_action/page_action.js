function hunt() {
  var waitTime =  Math.floor(Math.random() * 90);
  console.log("Hunting...");
  console.log(waitTime);
  setTimeout(function() {
    console.log("Reach here!");
    $(".mousehuntHud-huntersHorn")[0].click();
  }, waitTime * 1000);
  setTimeout(hunt, 15 * 60 * 1000);
}

$(document).ready(() => {
  var timeLeft = $("#huntTimer").text();
  console.log(timeLeft);
  if (timeLeft == "Ready!") {
    hunt()
  } else {
    var min = timeLeft.split(":")[0];
    var sec = timeLeft.split(":")[1];
    var wait = (parseInt(min) * 60 + parseInt(sec)) * 1000;
    console.log(wait);
    setTimeout(hunt, wait);
  }
});
