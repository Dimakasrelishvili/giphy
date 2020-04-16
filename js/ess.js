//M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92
$(document).ready(function(){

var topics= ["dog","cat","tiger","mouse","squirel"]

 for(i=0; i<topics.length; i++){
 var topButton = $("<button>")
 topButton.text(topics[i])
 topButton.attr({"value":topics[i], "id":"button"+i, "class":"button"})
 $("#gifHolder").append(topButton)
 console.log(topButton.attr("class"))
 };


 
 $(".button").on("click", function(){
  
  var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" +$(this).attr("value")+"&api_key=M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92&limit=5");

 $.ajax({
   url: queryURL,
   method: "GET"
  }).then(function(response) {
    console.log(response.data[0]);
    
  });  
 
  
  
});
    
   
    



















    
})