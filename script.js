async function fetchISSLocation() {
  try {
      const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
      const data = await response.json();

      const latitudeElement = document.getElementById("latitude");
      const longitudeElement = document.getElementById("longitude");
      const speedElement = document.getElementById("speed");

      // Formatting latitude, longitude, and speed to 2 decimal places
      latitudeElement.textContent = data.latitude.toFixed(2);
      longitudeElement.textContent = data.longitude.toFixed(2);
      speedElement.textContent = data.velocity.toFixed(2);
      document.getElementById("numberOfPeople").textContent = data.footprint.toFixed(0);

      setTimeout(fetchISSLocation, 1000); // Fetch data every 1 seconds
  } catch (error) {
      console.error("Error fetching ISS data:", error);
  }
}

fetchISSLocation(); // Start fetching ISS data

// Show the pop-up when the window loads
window.onload = function() {
  document.getElementById('popup').style.display = 'block';
};

// Close the pop-up when the close button is clicked
document.getElementById('closeButton').onclick = function() {
  document.getElementById('popup').style.display = 'none';
};