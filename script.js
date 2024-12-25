//ISS Speed data

// Get the HTML element by its ID
const fluctuatingElement = document.getElementById('fluctuatingValue');

// Function to update the element with a fluctuating value
function updateFluctuatingValue() {
    const baseValue = 27000; // Initial value
    const fluctuationRange = 100; // Range of fluctuation

    // Generate a random fluctuation within the range
    const fluctuation = Math.random() * fluctuationRange - (fluctuationRange / 2);

    // Calculate the new value
    const newValue = baseValue + fluctuation;

    // Update the HTML element's content
    fluctuatingElement.textContent = newValue.toFixed(2) + ' km/h';
}

// Call the update function initially
updateFluctuatingValue();

// Update the value every 3 seconds
setInterval(updateFluctuatingValue, 2000);

fetch('iss.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

//ISS Latitude + Longitude data
async function fetchISSLocation() {
    try {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await response.json();

        const latitudeElement = document.getElementById('latitude');
        const longitudeElement = document.getElementById('longitude');

        latitudeElement.textContent = data.iss_position.latitude;
        longitudeElement.textContent = data.iss_position.longitude;

        setTimeout(fetchISSLocation, 2000); // Fetch data every 0.1 seconds
    } catch (error) {
        console.error('Error fetching ISS data:', error);
    }
}

fetchISSLocation(); // Start fetching ISS data


//humans on ISS
async function fetchISSInfo() {
    try {
        const response = await fetch('http://api.open-notify.org/astros.json');
        const data = await response.json();

        const numberOfPeople = data.number;
        //const peopleInSpace = data.people.map(person => person.name).join(', ');

        // Update HTML elements with fetched data
        document.getElementById('numberOfPeople').textContent = numberOfPeople;
        //document.getElementById('peopleInSpace').textContent = peopleInSpace;
    } catch (error) {
        console.error('Error fetching ISS information:', error);
    }
}

fetchISSInfo(); //start fetching human data
