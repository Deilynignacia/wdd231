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

// Thank You
const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const confirmationDetails = document.getElementById('confirmation-details');
const firstName = params.get('firstName');
const lastName = params.get('lastName');
const email = params.get('email');
const phone = params.get('phone');
const orgName = params.get('orgName');
const level = params.get('level');
const timestamp = params.get('timestamp');
function formatTimestamp(isoString) {
    if (!isoString) return 'N/A';
    const date = new Date(isoString);
    return date.toLocaleString();
}

    // Dynamic Content
    const detailsHTML = `
        <h2>Thank you for application, ${firstName}!</h2>
        
        <div class="confirmation-grid">
            <div class="detail-box">
                <h3>Contact Information</h3>
                <p><strong>Name: </strong> ${firstName} ${lastName}</p>
                <p><strong>Email: </strong> ${email}</p>
                <p><strong>Phone: </strong> ${phone}</p>
            </div>

            <div class="detail-box">
                <h3>Organization and Membership</h3>
                <p><strong>Organization:</strong> ${orgName}</p>
                <p><strong>Membership Level:</strong> ${level} Membership</p>
            </div>

        </div>
    `;

    if (confirmationDetails) {
        confirmationDetails.innerHTML = detailsHTML;
    }