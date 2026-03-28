const apiKey = "7e7cfe48103c68d2460240aa93e2f850";
const lat = 0.23461748513703862;
const lon = -78.25930625605271;
const units = "metric"; // Lo dejamos en °C y convertimos a °F

// Función para convertir °C a °F y redondear
function cToF(celsius) {
    return Math.round(celsius * 9 / 5 + 32);
}

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();

        const currentWeather = document.querySelector(".current-weather");
        const tempF = cToF(data.main.temp);
        currentWeather.querySelector("#temp").textContent = `Temperature: ${tempF} °F`;
        currentWeather.querySelector("#desc").textContent = `Weather: ${data.weather[0].description}`;
        const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        currentWeather.querySelector("#weather-icon").src = iconSrc;
        currentWeather.querySelector("#weather-icon").alt = data.weather[0].description;

    } catch (error) {
        console.error(error);
        document.querySelector(".current-weather #temp").textContent = error.message;
    }
}

async function getForecast() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        const forecastContainer = document.querySelector(".forecast-weather");
        forecastContainer.innerHTML = ""; // Limpiamos contenido

        for (let i = 0; i < 3; i++) {
            const item = data.list[i * 8]; // cada 8 entradas ≈ 1 día
            const date = new Date(item.dt * 1000);
            const dayName = date.toDateString().split(" ")[0]; // Solo el día abreviado: "Sat", "Sun"...
            const tempF = cToF(item.main.temp);

            const p = document.createElement("p");
            p.textContent = `${dayName}: ${tempF} °F`; // Solo día y temperatura
            forecastContainer.appendChild(p);
        }

    } catch (error) {
        console.error(error);
        document.querySelector(".forecast-weather").textContent = error.message;
    }
}

// Ejecutar funciones
getWeather();
getForecast();