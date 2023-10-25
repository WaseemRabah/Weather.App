document.addEventListener('DOMContentLoaded', function () {
    const apikey = "8abf7d32ed7a60b78ee3c1903714fa3e"; // Your API key
    const cityElement = document.querySelector(".city");
    const iconElement = document.querySelector(".icon");
    const descriptionElement = document.querySelector(".description");
    const tempElement = document.querySelector(".temp");
    const humidityElement = document.querySelector(".humidity");
    const windElement = document.querySelector(".wind");
    const bodyElement = document.body;
    const searchBar = document.querySelector(".search-bar");

    // Function to fetch weather data
    async function fetchWeather(city) {
        try {
            const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
            );
        
            if (!response.ok) {
            throw new Error("Failed to fetch data");
            }
        
            const data = await response.json();
            displayWeather(data);
            } catch (error) {
            console.error('Error:', error);
            }
        }

        // Function to display weather data
    function displayWeather(data) {
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
        //display when user input the city
        const weatherContainer = document.querySelector(".weather");
        weatherContainer.style.display = "block";
      }

    // Function to update the clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const timeString = `${hours}:${minutes}:${seconds}`;
        const timeNowElement = document.querySelector(".timeNow");
        timeNowElement.textContent = timeString;
      }

    // Function to initiate a search
    function search() {
        const searchValue = searchBar.value;
        fetchWeather(searchValue);
      }
    