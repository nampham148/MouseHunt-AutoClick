// check whether we hit king's reward
function checkCaptcha() {
  var timeLeft = $("#huntTimer").text();
  console.log("-------------");
  console.log(timeLeft);
  if (timeLeft == "Ready!") {
    // hit the captcha
    console.log("Captcha detected");
    // reload to solve the captcha
    location.reload();
  } else {
    // keep hunting
    var wait = convertToMilisec(timeLeft);
    console.log("go next: ", wait);
    setTimeout(hunt, wait);
  }
}

function solveCaptcha() {
  var img_url = $(".mousehuntPage-puzzle-form-captcha-image").css("background-image").split('"')[1];
  console.log(img_url);

  var url = "https://fast-atoll-81283.herokuapp.com/read";
  $.ajax({
    type: 'POST',
    url: url,
    data: {url: img_url},
    success: function (data) {
      if (data != "Cannot read") {
        // get an answer. Try it
        $(".mousehuntPage-puzzle-form-code").val(data);
        $(".mousehuntPage-puzzle-form-code-button").click();
        location.reload();
      } else {
        // get a new code and try again
        $(".mousehuntPage-puzzle-form-newCode").find('a:first')[0].click();
        location.reload();
      }
    },
    error: function(jqXhr, textStatus, error) {
      alert('XHR error: ' + jqXhr.responseJSON.error.message);
    }
  });
}