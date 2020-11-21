

function fetchData(lat, lon) {

    var getLat = lat;
    var getLon = "&lon=" + lon;
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
          <div>
          <img src="${user.imgMedium}" alt="${user.name}" />
          </div>
          <div>
<ul>
          <p><h1>${user.name}</h1></p>
          <p>Location: ${user.location}</p>
          <p>Length: ${user.length} miles</p>
          <p>Difficulty: ${user.difficulty}</p>
          <p>Trailhead: (${user.latitude}, ${user.longitude})</p>
          <p>Description: ${user.summary}</p>
          <br><button id="Equipment" type="submit">Equipment</button><button id="Navigate" type="submit">Directions</button>
</ul>
          </div>
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


