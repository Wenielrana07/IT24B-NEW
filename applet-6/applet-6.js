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