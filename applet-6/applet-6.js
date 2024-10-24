document.getElementById('getWeather').addEventListener('click', function() {
    const apiKey = document.getElementById('apiKeyInput').value;
    const city = document.getElementById('city').value;

    if (!apiKey || !city) {
        alert('Please enter both API Key and City name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) throw new Error('City not found');
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
});

function displayWeather(data) {
    const weatherResults = document.getElementById('weatherResults');
    weatherResults.innerHTML = ''; // Clear previous results

    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card card text-white mb-3';
    weatherCard.style.display = 'block'; // Show the card


    
    // Get current date
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    weatherCard.innerHTML = `
        <div class="card-header">${data.name}</div>
        <div class="card-body">
            <h5 class="card-title">${Math.round(data.main.temp - 273.15)}°C</h5>
            <p class="card-text">${data.weather[0].description}</p>
            <p class="card-text"><small>${formattedDate}</small></p> <!-- Display the date -->
        </div>
    `;
    weatherResults.appendChild(weatherCard);

}