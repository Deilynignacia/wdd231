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

// Courses Array
const completedCourses = [
    { course: 'CSE111', title: 'Programming with Functions', credits: 2, grade: 'A' },
    { course: 'CSE210', title: 'Programming with Classes', credits: 2, grade: 'A' },
    { course: 'CSEPC110', title: 'Introduction to Programming (EQUIV)', credits: 2, grade: 'A' },
    { course: 'WDD130', title: 'Web Fundamentals', credits: 2, grade: 'A' },
    { course: 'WDD131', title: 'Dynamic Web Fundamentals', credits: 2, grade: 'A' }
];

function displayCourses(courses) {
    const coursesContainer = document.querySelector('.courses');
    let totalCredits = 0;

    courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
        
    // Card
    courseCard.innerHTML = 
        `<h3>${course.course} - ${course.title}</h3>
        <p>Credits: ${course.credits}</p>
        <p>Grade: ${course.grade}</p>
        <p class="status">Status: Completed</p>`;
        
    coursesContainer.appendChild(courseCard);
        
    // Credits
    totalCredits += course.credits;
    });
    
    // Total Credits
    document.getElementById('total-credits').textContent = totalCredits;
}

displayCourses(completedCourses);