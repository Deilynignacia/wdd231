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
