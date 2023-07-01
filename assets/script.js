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
    },
    displayWeather: function (data) {
// Extract the 'name' property from the 'data' object
        const { name } = data;
 // Extract the 'icon' and 'description' properties from the first element of the 'weather' array in the 'data' object
        const { icon, description } = data.weather[0];
// Extract the 'temp' and 'humidity' properties from the 'main' object in the 'data' object
        const { temp, humidity } = data.main;
// Extract the 'speed' property from the 'wind' object in the 'data' object
        const { speed } = data.wind;
// Log the extracted values to the console for debugging
        console.log(name, icon, description, temp, humidity, speed);
// Update the HTML element with class "city" to display the city name
        document.querySelector(".city").innerText = "Weather in " + name;
// Update the HTML element with class "icon" to display the weather icon image
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
// Update the HTML element with class "description" to display the weather description
        document.querySelector(".description").innerText = description;
// Update the HTML element with class "temp" to display the temperature
        document.querySelector(".temp").innerText = temp + "°C";
// Update the HTML element with class "humidity" to display the humidity
        document.querySelector(".humidity").innerText = "Humidity" + " " + humidity + "%";
// Update the HTML element with class "wind" to display the wind speed
        document.querySelector(".wind").innerText = "Wind Speed" + " " + speed + "km/h";
// Set the background image of the body element using the city name as a search term
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
// Retrieve the value entered in the search bar
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document
    .querySelector(".search-bar")
// Add event listener to search bar for keyup event
    .addEventListener("keyup", function (event) {
// Check if Enter key is pressed
        if (event.key == "Enter") {
            weather.search();
        }
    });
// Fetch weather data for Berlin
weather.fetchWeather("Berlin");