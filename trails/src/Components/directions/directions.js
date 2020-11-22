// JavaScript source code

// Get the users location.
var city = localStorage.getItem("city");
var state = localStorage.getItem("state");

// Get the Latitude and Longitude for the trailhead.
// HARD CODED RIGHT NOW. WORKING ON GETTING LAT AND LONG FROM API.
var lat = 39.9527;
var long =  -105.2313;

// Test URL
var url = "https://www.google.com/maps/dir/?api=1&origin" + city + "+" + state + "&destination=" + lat + "," + long;



function getDirections(){
	window.open(url, "_blank");
}

