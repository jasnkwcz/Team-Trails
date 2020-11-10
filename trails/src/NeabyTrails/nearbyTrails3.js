document.addEventListener('DOMContentLoaded', activateButton);

function activateButton() {
  document.getElementById("nearbyTrails").addEventListener("click", function(event) {
    var req = new XMLHttpRequest();
	
var apiURL = "https://www.hikingproject.com/data/get-trails?lat=";
var apiKey = "&maxDistance=10&key=200969017-49dfe1c23872438379f0a1e5e5314b8e";


		var zipLat = 47.612;
		var zipLon = -122.304;



    var setURL = apiURL + zipLat + "&lon=" + zipLon + apiKey;

    req.open('GET', setURL, true);

    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        console.log(response);

	document.getElementById("totalTrails").textContent = response.trails.length;


var i;
for (i = 0; i < response.trails.length; i++){


        document.getElementById("name").textContent = response.trails[0].name;
        document.getElementById("location").textContent = response.trails[0].location;
        document.getElementById("distance").textContent = response.trails[0].length;
        document.getElementById("difficulty").textContent = response.trails[0].difficulty;
        document.getElementById("longitude").textContent = response.trails[0].longitude;
        document.getElementById("latitude").textContent = response.trails[0].latitude;
        document.getElementById("description").textContent = response.trails[0].summary;

        document.getElementById("name1").textContent = response.trails[1].name;
        document.getElementById("location1").textContent = response.trails[1].location;
        document.getElementById("distance1").textContent = response.trails[1].length;
        document.getElementById("difficulty1").textContent = response.trails[1].difficulty;
        document.getElementById("longitude1").textContent = response.trails[1].longitude;
        document.getElementById("latitude1").textContent = response.trails[1].latitude;
        document.getElementById("description1").textContent = response.trails[1].summary;


        document.getElementById("name2").textContent = response.trails[2].name;
        document.getElementById("location2").textContent = response.trails[2].location;
        document.getElementById("distance2").textContent = response.trails[2].length;
        document.getElementById("difficulty2").textContent = response.trails[2].difficulty;
        document.getElementById("longitude2").textContent = response.trails[2].longitude;
        document.getElementById("latitude2").textContent = response.trails[2].latitude;
        document.getElementById("description2").textContent = response.trails[2].summary;


        document.getElementById("name3").textContent = response.trails[3].name;
        document.getElementById("location3").textContent = response.trails[3].location;
        document.getElementById("distance3").textContent = response.trails[3].length;
        document.getElementById("difficulty3").textContent = response.trails[3].difficulty;
        document.getElementById("longitude3").textContent = response.trails[3].longitude;
        document.getElementById("latitude3").textContent = response.trails[3].latitude;
        document.getElementById("description3").textContent = response.trails[3].summary;

       document.getElementById("name4").textContent = response.trails[4].name;
        document.getElementById("location4").textContent = response.trails[4].location;
        document.getElementById("distance4").textContent = response.trails[4].length;
        document.getElementById("difficulty4").textContent = response.trails[4].difficulty;
        document.getElementById("longitude4").textContent = response.trails[4].longitude;
        document.getElementById("latitude4").textContent = response.trails[4].latitude;
        document.getElementById("description4").textContent = response.trails[4].summary;

       document.getElementById("name5").textContent = response.trails[5].name;
        document.getElementById("location5").textContent = response.trails[5].location;
        document.getElementById("distance5").textContent = response.trails[5].length;
        document.getElementById("difficulty5").textContent = response.trails[5].difficulty;
        document.getElementById("longitude5").textContent = response.trails[5].longitude;
        document.getElementById("latitude5").textContent = response.trails[5].latitude;
        document.getElementById("description5").textContent = response.trails[5].summary;

       document.getElementById("name6").textContent = response.trails[6].name;
        document.getElementById("location6").textContent = response.trails[6].location;
        document.getElementById("distance6").textContent = response.trails[6].length;
        document.getElementById("difficulty6").textContent = response.trails[6].difficulty;
        document.getElementById("longitude6").textContent = response.trails[6].longitude;
        document.getElementById("latitude6").textContent = response.trails[6].latitude;
        document.getElementById("description6").textContent = response.trails[6].summary;


       document.getElementById("name7").textContent = response.trails[7].name;
        document.getElementById("location7").textContent = response.trails[7].location;
        document.getElementById("distance7").textContent = response.trails[7].length;
        document.getElementById("difficulty7").textContent = response.trails[7].difficulty;
        document.getElementById("longitude7").textContent = response.trails[7].longitude;
        document.getElementById("latitude7").textContent = response.trails[7].latitude;
        document.getElementById("description7").textContent = response.trails[7].summary;


       document.getElementById("name8").textContent = response.trails[8].name;
        document.getElementById("location8").textContent = response.trails[8].location;
        document.getElementById("distance8").textContent = response.trails[8].length;
        document.getElementById("difficulty8").textContent = response.trails[8].difficulty;
        document.getElementById("longitude8").textContent = response.trails[8].longitude;
        document.getElementById("latitude8").textContent = response.trails[8].latitude;
        document.getElementById("description8").textContent = response.trails[8].summary;

       document.getElementById("name9").textContent = response.trails[9].name;
        document.getElementById("location9").textContent = response.trails[9].location;
        document.getElementById("distance9").textContent = response.trails[9].length;
        document.getElementById("difficulty9").textContent = response.trails[9].difficulty;
        document.getElementById("longitude9").textContent = response.trails[9].longitude;
        document.getElementById("latitude9").textContent = response.trails[9].latitude;
        document.getElementById("description9").textContent = response.trails[9].summary;





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


