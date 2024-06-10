// time.js
function updateDateTime() {
  const now = new Date();
  const datetime = now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  document.getElementById('datetime').innerHTML = datetime;
}

function updateWeather() {
  const apiKey = '4bd9c861698a5463398901be13e5a9ba'; // Ganti dengan API Key dari OpenWeatherMap
  const city = 'Jakarta'; // Ganti dengan kota Anda

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const weatherDesc = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;
      const weatherHTML = `
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Weather Icon">
        <p>${temp}°C, ${weatherDesc}</p>
      `;
      document.getElementById('weather').innerHTML = weatherHTML;
    })
    .catch(error => console.log('Error fetching weather data:', error));
}

// Update Date and Time every second
setInterval(updateDateTime, 1000);

// Update Weather once on page load
updateWeather();