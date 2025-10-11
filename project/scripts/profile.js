const urlParams = new URLSearchParams(window.location.search);

// Extract Data
const userName = urlParams.get('name'); 
const userRole = urlParams.get('role'); 
const userTeam = urlParams.get('main_team');
const userUsername = urlParams.get('username'); 
const userPassword = urlParams.get('password'); 

// Role or team
const effectiveRole = userRole || userTeam;

// Create User's Profile
const userProfile = {
    name: userName,
    role: effectiveRole,
    team: userTeam,
    username: userUsername,
    password: userPassword, 
    // Last Visit
    lastLogin: new Date().toLocaleString(), 
};

// Save as JSON
localStorage.setItem('currentUser', JSON.stringify(userProfile));
localStorage.setItem('isLoggedIn', 'true');

const welcomeMessage = document.getElementById('welcomeMessage');
// Personalized Welcome Message
welcomeMessage.textContent = `Welcome to your Digital Stage Manager, ${userProfile.name}! We appreciate dearly your collaboration in making this Musical possible.`;

// Go to My Portal
const goToHomeButton = document.getElementById('goToHome');
goToHomeButton.addEventListener('click', function() {
    // home.html
    window.location.href = 'home.html'; 
});