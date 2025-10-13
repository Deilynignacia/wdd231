// Last visit
const visitBtn = document.querySelector('#show-last-visit');
const visitText = document.querySelector('#visit-text');

visitBtn.addEventListener('click', () => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toLocaleString();

    visitText.textContent = lastVisit
        ? `Last visit: ${lastVisit}`
        : "Welcome! This is your first visit.";
    localStorage.setItem('lastVisit', now);
});

// Current Year
const currentYearSpan = document.getElementById('currentyear');
const today = new Date();
const currentYear = today.getFullYear();

currentYearSpan.textContent = currentYear;

// Menu
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });