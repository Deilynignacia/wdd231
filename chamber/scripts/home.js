// Footer
    // Current Year
    const currentYearSpan = document.getElementById('currentyear');
    const today = new Date();
    const currentYear = today.getFullYear();
    currentYearSpan.textContent = currentYear;

    // Last Modified
    const lastModifiedParagraph = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified; 
    lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;

// Menu
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

// Spotlights Section ()
document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members");

    // JSON
    fetch("data/members.json")
        .then(response => response.json())
        .then(members => {
            // Filter
            const premiumMembers = members.filter(member => {
                return member.membership.includes("GOLDEN") || member.membership.includes("SILVER");
            });

            // Random Elements and selection
            premiumMembers.sort(() => Math.random() - 0.5);
            const spotlightMembers = premiumMembers.slice(0, 2); 
            
            // Cards
            spotlightMembers.forEach(member => {
                const card = document.createElement("div");
                card.classList.add("member-card");

                card.innerHTML = 
                    `<img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p>${member.membership}</p>
                    <p>${member.category}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>`;
                membersContainer.appendChild(card);
            });
        })
});

// Weather Section (Current)
async function apiFetch() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Valparaiso,CL&units=metric&appid=13d3b5d0bf9cef57130d5bedc9650958";

    try {
        const response = await fetch(url); 
        
        if (response.ok) {
            const data = await response.json(); 
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;

    const description = data.weather[0].description;
    const temp = data.main.temp.toFixed(1);
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    
    const detailedDesc = `Currently ${description}, with a temperature of ${temp}°C, humidity at ${humidity}%, and wind speeds of ${wind} km/h.`;
    
    captionDesc.textContent = detailedDesc;

    const iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
}

// Weather Section (Forecast)
async function apiForecastFetch() {
    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Valparaiso,CL&units=metric&appid=13d3b5d0bf9cef57130d5bedc9650958";

    try {
        const response = await fetch(forecastURL); 
        
        if (response.ok) {
            const data = await response.json(); 
            displayForecast(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiForecastFetch();

const forecastDay1 = document.querySelector('#day1')
const forecastDay2 = document.querySelector('#day2')
const forecastDay3 = document.querySelector('#day3')

// Filter
function displayForecast(data) {
    const forecastList = data.list.filter(item => {
        return item.dt_txt.includes('12:00:00');
    });

    // Day 1
    const date1 = new Date(forecastList[0].dt * 1000); 
    const dayOfWeek1 = date1.toLocaleDateString('es-CL', { weekday: 'short' }); 
    const temp1 = forecastList[0].main.temp.toFixed(0);
    forecastDay1.innerHTML = `${dayOfWeek1}: ${temp1}&deg;C`; 

    // Day 2
    const date2 = new Date(forecastList[1].dt * 1000);
    const dayOfWeek2 = date2.toLocaleDateString('es-CL', { weekday: 'short' }); 
    const temp2 = forecastList[1].main.temp.toFixed(0);
    forecastDay2.innerHTML = `${dayOfWeek2}: ${temp2}&deg;C`; 

    // Day 3
    const date3 = new Date(forecastList[2].dt * 1000);
    const dayOfWeek3 = date3.toLocaleDateString('es-CL', { weekday: 'short' }); 
    const temp3 = forecastList[2].main.temp.toFixed(0);
    forecastDay3.innerHTML = `${dayOfWeek3}: ${temp3}&deg;C`; 
}
