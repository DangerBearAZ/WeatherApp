var locationInputEl = document.querySelector("#location")
var weather = document.getElementById("#titleEl")
var tempEl = document.getElementById("tempEl")

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
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=6864ab667437eddcb5ebc40aa45d6f83";
    fetch(apiUrl)
        .then(function (response) {
            // if request was successful
            if (response.ok) {
                // console.log(response);
                response.json().then(function (weather) {
                    // console.log(weather);
                    displayWeather(weather, location);
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
var displayWeather = function (weather) {
    //if blank
    if (weather.length === 0) {
        locationInputEl.textContent = "location not found";
        return;
    }
    // display weather
    titleEl.innerText = (weather.name);
    tempEl.innerText = (weather.main.temp);
    humidityEl.innerText = (weather.main.humidity);
    windSpeedEl.innerText = (weather.wind.speed);

    var uvIndex = function () {
        var apiUrl = "http://api.openweathermap.org/data/2.5/uvi?" + "lon=" + weather.coord.lon + "&lat=" + weather.coord.lat + "&appid=6864ab667437eddcb5ebc40aa45d6f83";
        fetch(apiUrl)
        .then(function(response) {
            if(response.ok){
                response.json().then(function (uvIndex) {
                    console.log(uvIndex)
                })
            }
        })
    
        
            
    }
      
};




document.getElementById("search").addEventListener("submit", formSubmitLocation);