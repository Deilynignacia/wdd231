// form-action.js (CORREGIDO)
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const detailsDiv = document.getElementById('report-details');
    
    if (!detailsDiv) {
        console.error('Error...');
        return; 
    }
    
    let htmlContent = '<ul>';
    
    for (const [key, value] of params.entries()) {
        const formattedKey = key.replace(/-/g, ' ')
                                .replace(/\b\w/g, l => l.toUpperCase());
        
        const displayValue = decodeURIComponent(value);
        
        htmlContent += `<li><strong>${formattedKey}:</strong> ${displayValue}</li>`;
    }
    
    htmlContent += '</ul>';
    
    detailsDiv.insertAdjacentHTML('beforeend', htmlContent);
});