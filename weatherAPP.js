const apiKey = 'c73f3f406e176d4a2685a83c0ff4fe5c';
const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeather');
const weatherDisplay = document.getElementById('weatherDisplay');

getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (!city) return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                weatherDisplay.textContent = data.message;
                return;
            }
            const { name, main, weather } = data;
            weatherDisplay.innerHTML = `
                <p><strong>${name}</strong></p>
                <p>Temperature: ${main.temp} °C</p>
                <p>Condition: ${weather[0].description}</p>
            `;
        })
        .catch(error => {
            weatherDisplay.textContent = 'Error fetching weather data.';
        });
});
