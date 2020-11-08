// JavaScript source code

// Get the users location.
var city = localStorage.getItem("city");
var state = localStorage.getItem("state");

// Test URL
var url = "https://www.google.com/maps/dir/?api=1&origin" + city + "+" + state + "&destination=Pike+Place+Market+Seattle+WA"



function getDirections(){
	window.open(url, "_blank");
}

