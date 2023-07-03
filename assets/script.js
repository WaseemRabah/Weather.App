const cityElement = document.querySelector(".city");
const iconElement = document.querySelector(".icon");
const descriptionElement = document.querySelector(".description");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const bodyElement = document.body;
const searchBtn = document.querySelector(".search button");
const searchBar = document.querySelector(".search-bar");



let weather = {
    apikey: "8abf7d32ed7a60b78ee3c1903714fa3e",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        cityElement.innerText = `Weather in ${name}`;
        iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
        descriptionElement.innerText = description;
        tempElement.innerText = `${temp}°C`;
        humidityElement.innerText = `Humidity ${humidity}%`;
        windElement.innerText = `Wind Speed ${speed}km/h`;
        bodyElement.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
    },

    search: function () {
        this.fetchWeather(searchBar.value);
    }
};

searchBtn.addEventListener("click", function () {
    weather.search();
});
searchBar.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Berlin");