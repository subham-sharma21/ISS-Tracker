async function fetchISSLocation() {
  try {
    // Fetch ISS location data
    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const data = await response.json();

    const latitudeElement = document.getElementById("latitude");
    const longitudeElement = document.getElementById("longitude");
    const speedElement = document.getElementById("speed");

    // Format latitude, longitude, and speed to 2 decimal places
    if (latitudeElement && longitudeElement && speedElement) {
      latitudeElement.textContent = data.latitude.toFixed(2);
      longitudeElement.textContent = data.longitude.toFixed(2);
      speedElement.textContent = data.velocity.toFixed(2);
    }

    // Fetch number of people in the ISS
    const response1 = await fetch("http://api.open-notify.org/astros.json");
    const data1 = await response1.json();

    // Update the number of people in the ISS
    const peopleElement = document.querySelector(".people #peopleCount");
    if (peopleElement) {
      peopleElement.textContent = data1.number;
    }

    setTimeout(fetchISSLocation, 1000); // Fetch data every 1 second
  } catch (error) {
    console.error("Error fetching ISS data:", error);
  }
}

// Start fetching ISS data
fetchISSLocation();

// Show the pop-up when the window loads
window.onload = function () {
  document.getElementById('popup').style.display = 'block';
};

// Close the pop-up when the close button is clicked
document.getElementById('closeButton').onclick = function () {
  document.getElementById('popup').style.display = 'none';
};
