// ISS Latitude + Longitude data
async function fetchISSLocation() {
    try {
      const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      const data = await response.json();
  
      const latitudeElement = document.getElementById("latitude");
      const longitudeElement = document.getElementById("longitude");
      const speedElement = document.getElementById("speed");
  
      latitudeElement.textContent = data.latitude;
      longitudeElement.textContent = data.longitude;
      speedElement.textContent = data.velocity;
      document.getElementById("numberOfPeople").textContent = data.footprint;
  
      setTimeout(fetchISSLocation, 1000); // Fetch data every 5 seconds
    } catch (error) {
      console.error("Error fetching ISS data:", error);
    }
  }
  
  fetchISSLocation(); // Start fetching ISS data