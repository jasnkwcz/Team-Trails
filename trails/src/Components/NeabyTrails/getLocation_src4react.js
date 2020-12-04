  
document.addEventListener('DOMContentLoaded', activateButton);

function activateButton() {
  document.getElementById("nearbyTrails").addEventListener("click", function(event) {
    var req = new XMLHttpRequest();
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?";
    var apiKey = "&appid=c681a7fcd870c24ab1f104b8df9e9f7e";

    var zipInput = document.getElementById("zip_input").value;
    var cityInput = document.getElementById("city_input").value;
    var buildURL = "";

    if (zipInput != "") {
      buildURL = "zip=" + zipInput;

    } else if (cityInput != "") {
      buildURL = "q=" + cityInput;

    }

    var setURL = weatherURL + buildURL + apiKey + "&units=imperial";
    req.open('GET', setURL, true);

    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        console.log(response);


        document.getElementById("weatherLat").textContent =response.coord.lat;
        document.getElementById("weatherLong").textContent =response.coord.lon;




        fetchData(response.coord.lat, response.coord.lon);

      } 
	else {
        var errorMessage = "Error: " + response.statusText;
        console.log(errorMessage);

      }
    });
    req.send(setURL);
    event.preventDefault();

  });
 
}
