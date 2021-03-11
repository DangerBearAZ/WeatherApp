 var locationInputEl = document.querySelector("#location")

 var formSubmitLocation = function(event){
     //prevent page from refreshing 
     event.preventDefault();

     // get value from input text area
     var location = locationInputEl.value.trim();
     console.log(location);
 }; 


// add event listeners to form and button container
locationInputEl.addEventListener("submit", formSubmitLocation);