var locationInputEl = document.querySelector("#location")
var weatherOut = document.getElementById("#weatherOut")

//location entered a 
var formSubmitLocation = function (event) {
    //prevent page from refreshing 
    event.preventDefault();

    // get value from input text area
    var location = locationInputEl.value.trim();
    // console.log(location);

    if (location) {
        getWeather(location);
        //clear old content 


    } else {
        alert("please enter a location");
    }
};

//get weather using API with paramiters of location 
var getWeather = function (location) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=6864ab667437eddcb5ebc40aa45d6f83";
    fetch(apiUrl)
        .then(function (response) {
            // if request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(data, location);
                });
            } else {
                alert("Error " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to WeatherAPI");
        });
};

//display weather
var displayWeather = function (weather, searchLocation) {
    //check if API returned anything
    if (weather.lenth === 0) {
        locationInputEl.textContent = "location not found";
        return;
    }
// this is doing somthing i need words I don't have works I need coffee
    locationInputEl.textContent = searchLocation; {
        var searchLocation = function () {
            titleEl.textContent = searchLocation;
            console.log(searchLocation);
        };
    }


}

// add event listeners to form and button container
document.getElementById("search").addEventListener("submit", formSubmitLocation);