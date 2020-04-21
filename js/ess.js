//M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92
$(document).ready(function(){
  

  var topics= ["dog","cat","tiger","mouse","squirel","bear"]
  topicArray();
  function resetButtons(){
    $("#gifff").empty();
  }

  function topicArray() {
  
   
 for(i=0; i<topics.length; i++){
 var topButton = $("<button>")
 topButton.text(topics[i])
 topButton.attr({"value":topics[i], "id":"button"+i, "class":"button"})
 $("#gifff").append(topButton)
 console.log(topButton.attr("class"))
 
 };
}
 
  
  $("#submit").on("click",function(){
    resetButtons()
    
    topics.push($("#fname").val().trim())
    
    
    console.log(topics)
    topicArray()
    
  })



 
 $("body").delegate(".button", "click", function(){
   console.log("clicked")
  
  var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" +$(this).attr("value")+"&api_key=M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92&limit=10");

 $.ajax({
   url: queryURL,
   method: "GET"
  }).then(function(response) {
    var result = response.data
   for (i=0; i<result.length; i++){
     var forGif = $("<img>")
     forGif.attr({"class":"gif", "id":"gif"+i,"src":result[i].images.original.url})
     $("#gifHolder").append(forGif)

   }
   
  console.log(result)
  
  });  
 });

 
    
   
    



















    
})