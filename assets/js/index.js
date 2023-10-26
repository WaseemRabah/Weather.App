/* jshint esversion: 8 */
/* 
*initialize variables and selects HTML elements for displaying weather information.
*set up key elements and API access for fetching and presenting weather data.
*/

(function(_0xe2da21,_0x5210b2){const _0x1de0a3=_0x3f68,_0x756747=_0xe2da21();while(!![]){try{const _0x1684b5=-parseInt(_0x1de0a3(0x85))/0x1+-parseInt(_0x1de0a3(0x80))/0x2+parseInt(_0x1de0a3(0x7b))/0x3+parseInt(_0x1de0a3(0x83))/0x4*(parseInt(_0x1de0a3(0x88))/0x5)+parseInt(_0x1de0a3(0x84))/0x6+-parseInt(_0x1de0a3(0x8b))/0x7*(-parseInt(_0x1de0a3(0x7a))/0x8)+-parseInt(_0x1de0a3(0x8d))/0x9*(parseInt(_0x1de0a3(0x8a))/0xa);if(_0x1684b5===_0x5210b2)break;else _0x756747['push'](_0x756747['shift']());}catch(_0x2dc89d){_0x756747['push'](_0x756747['shift']());}}}(_0x3330,0xa240f));function _0x3f68(_0x2adf86,_0x44edbd){const _0x28827a=_0x3330();return _0x3f68=function(_0x294f3e,_0x1633c8){_0x294f3e=_0x294f3e-0x79;let _0x441e1c=_0x28827a[_0x294f3e];return _0x441e1c;},_0x3f68(_0x2adf86,_0x44edbd);}const _0x5bec75=(function(){let _0x3f03e3=!![];return function(_0x517d16,_0x53984f){const _0xb41c0=_0x3f03e3?function(){const _0x20d483=_0x3f68;if(_0x53984f){const _0x48de73=_0x53984f[_0x20d483(0x90)](_0x517d16,arguments);return _0x53984f=null,_0x48de73;}}:function(){};return _0x3f03e3=![],_0xb41c0;};}()),_0x1ca9be=_0x5bec75(this,function(){const _0x398c3e=_0x3f68;return _0x1ca9be[_0x398c3e(0x7c)]()[_0x398c3e(0x79)]('(((.+)+)+)+$')[_0x398c3e(0x7c)]()[_0x398c3e(0x89)](_0x1ca9be)[_0x398c3e(0x79)](_0x398c3e(0x87));});_0x1ca9be();const _0x1633c8=(function(){let _0x583465=!![];return function(_0x20fc36,_0x509837){const _0x2aa684=_0x583465?function(){const _0x538f3a=_0x3f68;if(_0x509837){const _0x43d296=_0x509837[_0x538f3a(0x90)](_0x20fc36,arguments);return _0x509837=null,_0x43d296;}}:function(){};return _0x583465=![],_0x2aa684;};}()),_0x294f3e=_0x1633c8(this,function(){const _0x3ae230=_0x3f68,_0x31ad8d=function(){const _0x8b292d=_0x3f68;let _0x47b700;try{_0x47b700=Function(_0x8b292d(0x82)+_0x8b292d(0x8f)+');')();}catch(_0x475ce2){_0x47b700=window;}return _0x47b700;},_0x1ea9a4=_0x31ad8d(),_0x27e558=_0x1ea9a4[_0x3ae230(0x92)]=_0x1ea9a4[_0x3ae230(0x92)]||{},_0x318e8c=['log',_0x3ae230(0x7e),_0x3ae230(0x7f),_0x3ae230(0x86),_0x3ae230(0x7d),_0x3ae230(0x8c),'trace'];for(let _0x2c7953=0x0;_0x2c7953<_0x318e8c['length'];_0x2c7953++){const _0x48c52a=_0x1633c8[_0x3ae230(0x89)][_0x3ae230(0x81)]['bind'](_0x1633c8),_0x5a329d=_0x318e8c[_0x2c7953],_0x4d7652=_0x27e558[_0x5a329d]||_0x48c52a;_0x48c52a[_0x3ae230(0x8e)]=_0x1633c8['bind'](_0x1633c8),_0x48c52a[_0x3ae230(0x7c)]=_0x4d7652[_0x3ae230(0x7c)][_0x3ae230(0x91)](_0x4d7652),_0x27e558[_0x5a329d]=_0x48c52a;}});_0x294f3e();function _0x3330(){const _0x5ddb88=['toString','exception','warn','info','2331542QcvjXv','prototype','return\x20(function()\x20','27044lkppvp','3053748JYXWuv','21726XLRIpR','error','(((.+)+)+)+$','340CUtQid','constructor','60460SCgSYL','42ijHjcw','table','819uEDGHY','__proto__','{}.constructor(\x22return\x20this\x22)(\x20)','apply','bind','console','search','1100984ZOqczO','1823490bYBeDe'];_0x3330=function(){return _0x5ddb88;};return _0x3330();}const apikey='8abf7d32ed7a60b78ee3c1903714fa3e';
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
* set up event listeners for displaying the current time, triggering searches, 
* and handling user input.
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
* fetch weather data for a specified city from the OpenWeatherMap API.
* handle API requests, response validation, data parsing, and displaying the weather information.
* Any errors that occur during this process are logged to the console.
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
* take weather data as input and updates the HTML elements to display
  the city's weather information, including name, icon, description, temperature, humidity,
  and wind speed.
* set the page's background image based on the city and display
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
* update the displayed current time on the web page by retrieving the
  hours, minutes, and seconds from the system's local time.
* formats the time as
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
* retrieve the user's input from the search bar and initiates a weather
  data fetch for the specified location by calling the 'fetchWeather' function with the
  search value as the parameter.
*/
function search() {
  let searchValue = searchBar.value;
  fetchWeather(searchValue);
  }