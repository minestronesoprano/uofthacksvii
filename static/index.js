function getLocation() {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showWeather);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}
}


function showWeather(position) {

var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
var apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=56ca5f931d46d52125b542392e02a718';
var tempAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=56ca5f931d46d52125b542392e02a718';

$.getJSON(apiCall,weatherCallback);
}

function weatherCallback(weatherData) {
  var cityName = weatherData.name;
  var country = weatherData.sys.country;
  var description = weatherData.weather[0].main;
  showIcon(description);
}

function showIcon(description) {
  if (description == "Clear") {
    $("#icon").html("<img src='https://i.ibb.co/JtfNgVj/sun.png'>");
  } else if (description == "Clouds") {
    $("#icon").html("<img src='https://i.ibb.co/h7J6sKT/cloudy.png'>");
  } else if (description == "Rain") {
    $("#icon").html("<img src='https://i.ibb.co/LSxhbjq/rainy.png'>");
  } else if (description == "Snow") {
    $("#icon").html("<img src='https://i.ibb.co/FY0Jfwb/snowy.png'>");
  }
}

//LINKS:
//SUNNY https://i.ibb.co/JtfNgVj/sun.png
//CLOUDY https://i.ibb.co/h7J6sKT/cloudy.png
// RAINY https://i.ibb.co/LSxhbjq/rainy.png
// SNOWY https://i.ibb.co/FY0Jfwb/snowy.png
// MOON https://i.ibb.co/ZBpjMNC/moon.png
// PARTLY CLOUDY https://i.ibb.co/dLvP9DM/partly-cloudy.png
// NIGHT TIME https://i.ibb.co/ZBpjMNC/moon.png
