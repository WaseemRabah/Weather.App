// API key for accessing the OpenWeatherMap API
let weather = {
    apikey: "8abf7d32ed7a60b78ee3c1903714fa3e",
//Define the fetchweather method
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
// Convert the response to JSON format
        ).then((response) => response.json())
// Pass the JSON data to the displayWeather method
        .then((data) => this.displayWeather(data));
    }
};