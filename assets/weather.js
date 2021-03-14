var locationInputEl = document.querySelector("#location")

var formSubmitLocation = function (event) {
    //prevent page from refreshing 
    event.preventDefault();

    // get value from input text area
    var location = locationInputEl.value.trim();
    console.log(location);

    if (location) {
        getWeather(location);
        //clear old content 


    } else {
        alert("please enter a location");
    }
};

//get weather using API with paramiters of location 
var getWeather = function (location) {
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}";
    fetch(apiURL)
    .then(function (response) {
        // if request was successful
        if (response.ok) {
            console.log(response);
            response.jason().then(function (data) {
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
var displayWeather = function (weather, searhterm) {
    //check if API returned anything
    if(weather.lenth === 0) {
        locationInputEl.textContent = "location not found";
        return;
    }
}

// add event listeners to form and button container
document.getElementById("search").addEventListener("submit", formSubmitLocation);