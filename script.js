document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------
    // Mobile Navigation Toggle
    // -------------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // -------------------------------
    // Set Active Nav Link
    // -------------------------------
    const navLinks = document.querySelectorAll('.nav-item a');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // -------------------------------
    // On-Scroll Animations
    // -------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // -------------------------------
    // Contact Form to WhatsApp
    // -------------------------------
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const planSelect = document.getElementById('plans-type');
            const planText = planSelect.options[planSelect.selectedIndex].text;
            const needs = document.getElementById('message').value;

            const whatsappNumber = '918299188579';
            const whatsappMessage = `
*New Inquiry from TechBazaar Website*

*Name:* ${name}
*Email:* ${email}
*Selected Plan:* ${planText}
*Needs Described:*
${needs}
            `;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        });
    }

    // -------------------------------
    // WhatsApp Community Join Form
    // -------------------------------
    const communityForm = document.querySelector('.newsletter-form');

    if (communityForm) {
        communityForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const phoneInput = document.getElementById('phone');
            const phoneNumber = phoneInput.value.trim();
            const whatsappGroupLink = 'https://chat.whatsapp.com/YourGroupInviteLinkHere';

            if (phoneNumber) {
                window.open(whatsappGroupLink, '_blank');
            }
        });
    }

});


// -------------------------------
// Testimonial Slider Auto-Scroll
// -------------------------------
let currentSlide = 0;
const slider = document.querySelector('.testimonial-slider');
const totalSlides = document.querySelectorAll('.testimonial-card').length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);
