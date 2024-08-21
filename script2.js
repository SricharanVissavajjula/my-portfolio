// JavaScript for animations and interactivity

// Scroll animations using AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Animation easing type
    once: true // Whether animation should happen only once
});

// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust this value for sticky navbar height
                behavior: 'smooth'
            });
        }
    });
});
// scripts.js

