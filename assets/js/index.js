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
