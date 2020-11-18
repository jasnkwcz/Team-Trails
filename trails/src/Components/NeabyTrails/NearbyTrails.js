
function fetchData() {
    activateButton();
    var getLat = 47.64;
    var getLon = "&lon=" + -122.36;
    var apiURL = "https://www.hikingproject.com/data/get-trails?lat=";
    var apiKey = "&maxDistance=10&key=200969017-49dfe1c23872438379f0a1e5e5314b8e";
    var buildLink = apiURL + getLat + getLon + apiKey;

    fetch(buildLink)
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
      console.log(data.trails);
      const html = data.trails.map(user => {
          return `
          <div class="user">
          <p><img src="${user.imgMedium}" alt="${user.name}" /></p>
          <h1>${user.name}</h1>
            <p>Location: ${user.location}</p>
            <p>Length: ${user.length} miles</p>
            <p>Difficulty: ${user.difficulty}</p>
            <p>Trailhead: (${user.latitude}, ${user.longitude})</p>
            <p>Description: ${user.summary}</p>
            <button id="Equipment" type="submit">Equipment</button><button id="Navigate" type="submit">Directions</button>
          </div>
          `;
      })
      .join("");
      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}

fetchData();