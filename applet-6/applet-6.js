document.getElementById('getWeather').addEventListener('click', function() {
    const apiKey = document.getElementById('apiKeyInput').value;
    const city = document.getElementById('city').value;

    if (!apiKey || !city) {
        alert('Please enter both API Key and City name.');
        return;
    }
});