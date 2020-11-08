document.addEventListener('DOMContentLoaded', activateButton);

function activateButton() {
  document.getElementById("nearbyTrails").addEventListener("click", function(event) {
    var req = new XMLHttpRequest();
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?";
    var apiKey = "&appid=c681a7fcd870c24ab1f104b8df9e9f7e";


    var zipInput = document.getElementById("zip_input").value;
    var buildURL = "";

    // Create URL
    if (zipInput != "") {
      buildURL = "zip=" + zipInput;

    } 

    var setURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200969017-49dfe1c23872438379f0a1e5e5314b8e";
    req.open('GET', setURL, true);

    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        console.log(response);

var i;
for (i = 0; i < response.trails.length; i++){

        document.getElementById("name").textContent = response.trails[i].name;
        document.getElementById("location").textContent = response.trails[i].location;
        document.getElementById("distance").textContent = response.trails[i].length;
        document.getElementById("difficulty").textContent = response.trails[i].difficulty;
        document.getElementById("longitude").textContent = response.trails[i].longitude;
        document.getElementById("latitude").textContent = response.trails[i].latitude;
        document.getElementById("description").textContent = response.trails[i].summary;



}




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




