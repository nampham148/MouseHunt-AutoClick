// Go hunt!
function hunt() {
  var waitTime =  Math.floor(Math.random() * 60) + 10;
  console.log("Hunting... but wait:", waitTime);
  setTimeout(function() {
    console.log("Sounding the horn!");
    $(".mousehuntHud-huntersHorn")[0].click();

    // wait 5 seconds for the DOM to update before checking captcha
    setTimeout(checkCaptcha, 5000);   
  }, waitTime * 1000);
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
    if ($(".mousehuntPage-puzzle-form-captcha-image")[0]){
      // hit the captcha
      solveCaptcha();
    } else {
      // hunt normally
      hunt();
    }
  } else {
    // wait till horn is available
    var wait = convertToMilisec(timeLeft);
    console.log(wait);
    setTimeout(hunt, wait);
  }
});