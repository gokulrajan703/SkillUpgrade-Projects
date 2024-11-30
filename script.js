// Dynamic Greeting Based on Time of Day
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();

    let greeting;
    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    greetingElement.textContent = `${greeting}, Welcome to My Portfolio!`;
}

// Smooth Scroll for Navigation
function smoothScroll() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Skill Progress Bars Animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const skillLevel = bar.dataset.level;
        bar.style.width = skillLevel;
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
    smoothScroll();
    animateSkills();
});
