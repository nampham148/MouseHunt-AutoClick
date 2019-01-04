// Go hunt!
function hunt() {
  var waitTime =  Math.floor(Math.random() * 90);
  console.log("Hunting... but wait:", waitTime);
  setTimeout(function() {
    console.log("Sounding the horn!");
    $(".mousehuntHud-huntersHorn")[0].click();

    // wait 5 seconds for the DOM to update before checking captcha
    setTimeout(checkCaptcha, 5000);   
  }, waitTime * 1000);
}

// check whether we hit king's reward (to be worked on)
function checkCaptcha() {
  var timeLeft = $("#huntTimer").text();
  console.log("-------------");
  console.log(timeLeft);
  if (timeLeft == "Ready!") {
    // hit the captcha
    console.log("Stop now");

    // handle the captcha (just hunt for now)
    setTimeout(hunt, 15*60*1000);
  } else {
    // keep hunting
    var wait = convertToMilisec(timeLeft);
    console.log("go next: ", wait);
    setTimeout(hunt, wait);
  }
}

// convert from time format mm:ss to miliseconds
function convertToMilisec(timeLeft) {
  var min = timeLeft.split(":")[0];
  var sec = timeLeft.split(":")[1];
  return (parseInt(min) * 60 + parseInt(sec)) * 1000;
}

// initiate the script
$(document).ready(() => {
  var timeLeft = $("#huntTimer").text();
  console.log(timeLeft);
  if (timeLeft == "Ready!") {
    hunt()
  } else {
    var wait = convertToMilisec(timeLeft);
    console.log(wait);
    setTimeout(hunt, wait);
  }
});