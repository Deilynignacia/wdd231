const buttonsContainer = document.getElementById('characters-buttons');
const modal = document.getElementById('character-modal');
const closeBtn = document.querySelector('.close-btn');

async function loadCharactersData() {
    try {
        const response = await fetch('data/characters.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const charactersData = await response.json();
        
        createCharacterCards(charactersData); 
        
    } catch (error) {
        console.error('Error loading the characters data:', error);
        buttonsContainer.innerHTML = '<p>Please try again...</p>';
    }
}

// Cards
function createCharacterCards(data) {
    buttonsContainer.innerHTML = ''; 
    
    data.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        
        const nameEl = document.createElement('h3');
        nameEl.textContent = character.name;
        const summaryEl = document.createElement('p');
        summaryEl.textContent = character.character_summary; 
        const button = document.createElement('button');
        button.textContent = 'Costume / Looks (' + character.looks.length + ')';
        button.classList.add('view-costume-btn');
        
        button.addEventListener('click', () => {
            showCharacterModal(character); 
        });
        
        card.appendChild(nameEl);
        card.appendChild(summaryEl);
        card.appendChild(button);
        
        buttonsContainer.appendChild(card);
    });
}

// Modal
function showCharacterModal(character) {
    // Character Information
    document.getElementById('modal-name').textContent = character.name;
    document.getElementById('modal-role').textContent = `Role: ${character.role}`;
    
    // Costume and Looks
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = ''; 

    character.looks.forEach(look => {
        const lookContainer = document.createElement('div');
        lookContainer.classList.add('character-look');
        
        const lookTitle = document.createElement('h4');
        lookTitle.textContent = look.look_name;

        const image = document.createElement('img');
        const imagePath = look.costume_file.includes('/') 
            ? look.costume_file
            : `images/${look.costume_file}`;
            
        image.src = imagePath;
        image.alt = `${character.name} - ${look.look_name}`;
        
        const description = document.createElement('p');
        description.textContent = look.description;
        
        const fileInfo = document.createElement('p');
        fileInfo.classList.add('costume-file-info');
        fileInfo.innerHTML = `Image File: <span>${look.costume_file}</span>`;

        lookContainer.appendChild(lookTitle);
        lookContainer.appendChild(image);
        lookContainer.appendChild(description);
        lookContainer.appendChild(fileInfo);
        
        modalBody.appendChild(lookContainer);
    });
    
    modal.style.display = 'flex'; 
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

loadCharactersData();