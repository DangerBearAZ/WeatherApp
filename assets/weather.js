var locationInputEl = document.querySelector("#location")
var weather = document.getElementById("#titleEl")
var tempEl = document.getElementById("tempEl")
var uvEl = document.getElementById("uvIndexEl")


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
                    console.log(weather);
                    displayWeather(weather, location);
                    uvIndex(weather);
                    fiveDay(weather);
                });
            } else {
                alert("Error " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to WeatherAPI");
        });
};

// used prior api to determin lat an lon for this new api url 
var uvIndex = function (weather) {
    const lon = (weather.coord.lon);
    const lat = (weather.coord.lat);
    // console.log(lon)
    // console.log(lat)
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=6864ab667437eddcb5ebc40aa45d6f83";
    fetch(apiUrl)
    .then(function (response){
        if (response.ok){
            response.json().then(function (uv) {
                // console.log(uv)
                displayUv(uv)
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

      
    }
    
var displayUv = function(uv) {
    uvEl.innerText = (uv.current.uvi);
}

// var fiveDay = function (weather)  {
// var lockationId = (weather.id)
// }

document.getElementById("search").addEventListener("submit", formSubmitLocation);