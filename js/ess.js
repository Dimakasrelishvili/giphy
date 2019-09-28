//M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92



 var dogs= "dog"


//javascript, jQuery

var queryURL = ("http://api.giphy.com/v1/gifs/search?q="+dogs+"&api_key=M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92&limit=5");


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });