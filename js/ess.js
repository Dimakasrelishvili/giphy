//M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92
$(document).ready(function(){
  
// array of topics, seeds
  var topics= ["dog","cat","tiger","mouse","squirel","bear"]
  // function to ganarate buttons to html for each topic and add attributes to it
  function topicArray() {
      
    for(i=0; i<topics.length; i++){
      
      var topButton = $("<button>")
      topButton.text(topics[i])
      topButton.attr({"value":topics[i], "id":"button"+i, "class":"button"})
      $("#gifff").append(topButton)
      console.log(topButton.attr("class"))
      
    };
  }
  // function to grab users input and push to topics list, reset current buttons and generate from new array 
  function submitClick (){
    topics.push($("#fname").val().trim());
    topicArray()
  }
   
  // takes the value of button was clicked and makes ajax call as well filters data creates html elements with attributes and appends to existing div
  
  $("body").delegate(".button", "click", function(){
    $("#gifHolder").empty()
    
    var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" +$(this).attr("value")+"&api_key=M1TfEu4vJtgbPsXFdBBz1KFdOFVhEP92&limit=10");
    
    $.ajax({
      datatype:"json",
      url: queryURL,
     method: "GET"
    }).then(function(response) {
      
      var result = response.data
      
      console.log(result)
      for (i=0; i<result.length; i++){
        var forGif = $("<img>")
        forGif.attr({"class":"gif", "id":"gif"+i,"src":result[i].images.original.url,"data-state":"animate"})
        forGif.attr("data-animate", result[i].images.original.url)
        forGif.attr("data-still", result[i].images.original_still.url)
        
        $("#gifHolder").append(forGif)
        
        
      }
      
      
    });  
  });
  
  // it runs if image was clicked, it finds attr data-state and changes src attribute depending it is animated or still
  $("body").delegate(".gif", "click", function(){
    
    var state = $(this).attr("data-state");  
    console.log(state);
    if (state === "animate") {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    } else if(state === "still" ) {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    
  });
  
  
  
  //calling functions
  topicArray();
  function resetButtons(){
    $("#gifff").empty();
    $("#fname").empty();
  }
  
  $("#submit").on("click",function(){
    resetButtons()
    submitClick()
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})