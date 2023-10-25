/* jshint esversion: 8 */
/* 
  initialize variables and selects HTML elements for displaying weather information.
  and set up key elements and API access for fetching and presenting weather data.
*/

const apikey = "8abf7d32ed7a60b78ee3c1903714fa3e";
const cityElement = document.querySelector(".city");
const iconElement = document.querySelector(".icon");
const descriptionElement = document.querySelector(".description");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const bodyElement = document.body;
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather");
const timeNowElement = document.querySelector(".timeNow");

/* 
  set up event listeners for displaying the current time, triggering searches, 
  and handling user input.
*/

document.addEventListener('DOMContentLoaded', function () {
  updateClock();
  setInterval(updateClock, 1000);
  searchBtn.addEventListener("click", search);

    searchBar.addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        search();
    }
    });
  });

/* 
  fetch weather data for a specified city from the OpenWeatherMap API.
  and handle API requests, response validation, data parsing, and displaying the weather information.
  Any errors that occur during this process are logged to the console.
*/
async function fetchWeather(city) {
    try {
        let response = await fetch(
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

/* 
  take weather data as input and updates the HTML elements to display
  the city's weather information, including name, icon, description, temperature, humidity,
  and wind speed.
  set the page's background image based on the city and display
  the weather information container.
*/

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
        weatherContainer.style.display = "block";
      }

/* 
  update the displayed current time on the web page by retrieving the
  hours, minutes, and seconds from the system's local time.
  It formats the time as
  HH:MM:SS and sets it as the content of the 'timeNowElement' element.
*/
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const timeString = `${hours}:${minutes}:${seconds}`;
        timeNowElement.textContent = timeString;
      }

/* 
  retrieve the user's input from the search bar and initiates a weather
  data fetch for the specified location by calling the 'fetchWeather' function with the
  search value as the parameter.
*/
    function search() {
      let searchValue = searchBar.value;
      fetchWeather(searchValue);
      }