document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "93eb39f7a874ef9cdfb0f5b651c04f50";

    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const outputSection = document.querySelector('.output-section');
    const temp = document.querySelector('#temp');
    const country = document.querySelector('#country');
    const windSpeed = document.querySelector('#wind-speed');
    const weather = document.querySelector('#weather');
    const humidity = document.querySelector('#humidity');
    const errorMessage = document.querySelector('#error-message');

    document.body.addEventListener('keydown',(e) => {
        if(e.key === "Enter"){
            searchButton.click();
        }
    })

    searchButton.addEventListener('click', async () => {
        const city = cityInput.value.trim();

        if (!city) {
            alert("Input Field Can't be Empty");
            return;
        }

        try {
            const weatherData = await fetchWeatherData(city); 
            displayWeatherData(weatherData);
        } catch (error) {
            displayError(error);
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        
        const rawData = await fetch(url);
        
        if(!rawData.ok){
            throw new Error("City Not Found");
        }
        const data = await rawData.json();
        // console.log(data);
        return data;
    }

    function displayWeatherData(weatherData) {
        errorMessage.classList.add('hidden');
        outputSection.classList.remove('hidden');
        
        // Assuming the data structure returned from OpenWeatherMap
        temp.textContent = `Temperature: ${weatherData.main.temp}` ;
        weather.textContent = `Weather: ${weatherData.weather[0].main}`
        country.textContent = `Country: ${weatherData.sys.country}`;
        windSpeed.textContent = `${weatherData.wind.speed}`;
        humidity.textContent = `${weatherData.main.humidity}`;

    }

    function displayError(error) {
        errorMessage.classList.remove('hidden');
        outputSection.classList.add('hidden');
        errorMessage.textContent = `${error}. Please try again.`; 
    }
});
