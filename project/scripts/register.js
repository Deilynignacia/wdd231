
const ROLE_OPTIONS = {
    // Acting
    acting: [
        { name: "Ebenezer Scrooge", value: "ebenezer_scrooge" },
        { name: "Bob Cratchit", value: "bob_cratchit" },
        { name: "Jacob Marley", value: "jacob_marley" },
        { name: "Ghost of the Present Christmas", value: "ghost_present" },
        { name: "Ghost of the Past Christmas", value: "ghost_past" },
        { name: "Ghost of the Christmas Yet to Come", value: "ghost_future" },
        { name: "Freds", value: "fred" },
        { name: "Belle", value: "belle" },
        { name: "Mr. Fezziwig", value: "mr_fezziwig" },
        { name: "Mrs. Fezziwig", value: "mrs_fezziwig" },
        { name: "Fan", value: "fan" },
        { name: "Tim", value: "tim" },
        { name: "Lily", value: "lily" },
    ],
    // Choir
    choir: [
        { name: "Coro General (+12)", value: "general_choir" },
        { name: "Coro Infantil (8-11)", value: "child_choir" },
    ],
    // Production
    production: [
        { name: "Dirección", value: "direction" },
        { name: "Tramoya", value: "stagehand" },
        { name: "Escenografía", value: "scenic" },
        { name: "Sonido", value: "sound" },
    ],
};

// DOM
const mainTeamSelect = document.getElementById('main_team');
const secondaryContainer = document.getElementById('secondary_selection_container');
const secondaryRoleSelect = document.getElementById('role');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

const goTo = document.getElementById('goTo');
const registrationForm = document.getElementById('registrationForm');

function updateSecondaryRole() {
    const selectedTeam = mainTeamSelect.value;
    
    secondaryRoleSelect.innerHTML = ''; 
    secondaryContainer.style.display = 'none'; 
    secondaryRoleSelect.removeAttribute('required'); 
    
    // Conditional Logic
    switch (selectedTeam) {
        // Dance has not axtra logic
        case 'dance':
            break;
            
        case 'acting':
        case 'choir':
        case 'production':
            
            const roles = ROLE_OPTIONS[selectedTeam];
            
            secondaryRoleSelect.innerHTML += `<option value="" disabled selected>Select your Part</option>`;
            
            roles.forEach(role => {
                secondaryRoleSelect.innerHTML += `<option value="${role.value}">${role.name}</option>`;
            });
            
            secondaryContainer.style.display = 'block';
            secondaryRoleSelect.setAttribute('required', 'true');
            break;
    }
}

mainTeamSelect.addEventListener('change', updateSecondaryRole);

goTo.addEventListener('click', function(e) {
    const requiredInputsStep1 = step1.querySelectorAll('[required]');
    let allValid = true;

    requiredInputsStep1.forEach(input => {
        if (!input.checkValidity()) {
            allValid = false;
            input.reportValidity(); 
        }
    });

    // Only if everything is valid, go to Step 2
    if (allValid) {
        step1.style.display = 'none';
        step2.style.display = 'block';
    }
});

//Step 2 (Credentials and Final Submition)
const finalSubmitButton = document.getElementById('finalSubmitButton');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

finalSubmitButton.addEventListener('click', function(e) {
    const requiredInputsStep2 = step2.querySelectorAll('[required]');
    let step2Valid = true;

    requiredInputsStep2.forEach(input => {
        if (!input.checkValidity()) {
            step2Valid = false;
            input.reportValidity();
        }
    });

    if (!step2Valid) {
        return;
    }

    // Validate Password
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match.');
        return; 
    } else {
        passwordInput.setCustomValidity(""); 
    }

    step1.style.display = 'block';
    registrationForm.submit(); 
});