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

// LocalStorage Last Visit
document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('visit-message');
    const MS_TO_DAYS = 86400000; 

    let lastVisit = Number(localStorage.getItem('lastVisit'));
    let currentDate = Date.now();

    if (!lastVisit) {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = currentDate - lastVisit;
        const daysDifference = Math.floor(timeDifference / MS_TO_DAYS);
        
        // Less than a day
        if (daysDifference < 1) {
            messageElement.textContent = "Back so soon! Awesome!";
        } 
        // One day
        else if (daysDifference === 1) {
            messageElement.textContent = `You last visited 1 day ago.`;
        } 
        // More than one day
        else {
            messageElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentDate);
});

// Places (JSON)
const placesGrid = document.getElementById('places-grid');
const jsonURL = 'data/places.json'; 

function createGridAreaName(name) {
    return name
        .toLowerCase()
        .replace(/[\s\(\)]/g, '-')
        .replace(/--+/g, '-') 
        .replace(/-$/, ''); 
}

async function getPlacesData() {
    try {
        const response = await fetch(jsonURL); 
        const places = await response.json();
        
        places.forEach(place => {
            const card = document.createElement("div");
            card.classList.add("place-card");
            
            const gridAreaName = createGridAreaName(place.name); 
            card.style.gridArea = gridAreaName; 
            
            // Card Content
            card.innerHTML = 
                `<h2>${place.name}</h2>
                 <figure>
                    <img src="images/${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
                 </figure>
                 <address>${place.address}</address>
                 <p>${place.description}</p>
                 <button class="learn-more">Learn More</button>`;

            placesGrid.appendChild(card);
        });
        
    } 
    // Error Handling
    catch (error) {
        console.error('Error: ', error);
        placesGrid.innerHTML = '<p>Could not load discovery data.</p>';
    }
}
getPlacesData();