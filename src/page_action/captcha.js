/*console.log("captcha.js");

var url = "https://fast-atoll-81283.herokuapp.com/read";

var GCVRequest = {
  requests: [{
    image: {
      source: {
        imageUri: 'https://www.mousehuntgame.com/puzzleimage.php?t=1546148829&snuid=100003809522292&hash=nUdk6yA2'
      }
      // must discard `data:image/png;base64,`
    },  
    features: [{type: 'TEXT_DETECTION'}]
  }]
};

$.ajax({
  type: 'POST',
  url: url,
  data: {url: "https://imageoptim.com/textinjpeg.jpg"},
  success: function (data) {
    var texts;
    console.log(data);
  },
  error: function(jqXhr, textStatus, error) {
    alert('XHR error: ' + jqXhr.responseJSON.error.message);
  }
});*/