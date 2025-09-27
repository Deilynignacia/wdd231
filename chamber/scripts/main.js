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

// Members
document.addEventListener("DOMContentLoaded", () => {
const membersContainer = document.getElementById("members");

    // JSON
    fetch("data/members.json")
        .then(response => response.json())
        .then(members => {
            members.forEach(member => {

                // Cards (image, name, adress, phone, website)
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

//Grid and List view
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");
const body = document.body;

gridBtn.addEventListener("click", () => {
    body.classList.add("grid");
    body.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    body.classList.add("list");
    body.classList.remove("grid");
});
