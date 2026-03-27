// scripts/weather.js
const apiKey = "7e7cfe48103c68d2460240aa93e2f850";
const lat = 0.23461748513703862;
const lon = -78.25930625605271;
const units = "metric"; // Celsius

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized: Check your API key.");
            } else if (response.status === 404) {
                throw new Error("City not found: Check coordinates.");
            } else if (response.status === 429) {
                throw new Error("Too many requests: You are over the free plan limit.");
            } else {
                throw new Error(`HTTP Error: ${response.status}`);
            }
        }

        const data = await response.json();
        console.log(data);

        document.getElementById("temp").textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById("desc").textContent = `Weather: ${data.weather[0].description}`;
        const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather-icon").src = iconSrc;
        document.getElementById("weather-icon").alt = data.weather[0].description;

    } catch (error) {
        console.error(error);
        document.getElementById("temp").textContent = error.message;
    }
}

async function getForecast() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        const forecastEl = document.getElementById("forecast");

        let forecastText = "3-Day Forecast:\n";
        for (let i = 0; i < 3; i++) {
            const item = data.list[i * 8]; // cada 8 entradas ≈ 1 día
            const date = new Date(item.dt * 1000);
            forecastText += `${date.toDateString()}: ${item.main.temp} °C, ${item.weather[0].description}\n`;
        }

        forecastEl.textContent = forecastText;

    } catch (error) {
        console.error(error);
        document.getElementById("forecast").textContent = error.message;
    }
}

// Ejecutar funciones
getWeather();
getForecast();