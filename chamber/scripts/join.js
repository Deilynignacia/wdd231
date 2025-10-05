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

// Timestamp
document.getElementById('timestamp').value = today.toISOString();

// Modals
const modalLinks = document.querySelectorAll('.modal-link'); 

modalLinks.forEach(link => {

    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        modal.style.display = 'block';
    });
});

const closeButtons = document.querySelectorAll('.close-button'); 

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
    });
});

