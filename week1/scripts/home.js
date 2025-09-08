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
