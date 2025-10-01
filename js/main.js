// This file can be used for future interactivity.
// For now, it's mostly a placeholder as the core functionality
// for a demo is handled with simple HTML links.

document.addEventListener('DOMContentLoaded', () => {
    console.log("CoRideX Website Loaded");

    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});