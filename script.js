document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }

            // Close the nav menu on link click (for mobile)
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
});

// script.js

// Function to handle the Intersection Observer logic
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing once the element is visible
            observer.unobserve(entry.target);
        }
    });
};

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.2 // Trigger when 20% of the element is visible
});

// Select all elements to be animated on scroll
const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');

// Observe each element
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Also handle the hamburger menu toggle if needed
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Hide menu on link click for mobile
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});