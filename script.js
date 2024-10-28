// script.js

// Translation content
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-gallery': 'Gallery',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Contact',
        // Hero Section
        'hero-title': 'Professional Painting Services in Montreal',
        'hero-subtitle': 'High-quality interior and exterior painting and design consultation.',
        'hero-cta': 'Request Your Free Estimate Today!',
        // Services Section
        'services-title': 'Our Services',
        'service1-title': 'Interior Painting',
        'service1-desc': 'Transform your living spaces with our professional interior painting services.',
        'service2-title': 'Exterior Painting',
        'service2-desc': 'Enhance your home\'s curb appeal with durable exterior painting.',
        'service3-title': 'Interior Design Consulting',
        'service3-desc': 'Get expert advice to create beautiful and functional spaces.',
        // Testimonials
        'testimonials-title': 'What Our Clients Say',
        'testimonial1': '"Simon and his team did an amazing job painting our home. Highly professional and great attention to detail!"',
        // Gallery
        'gallery-title': 'Our Work',
        // Contact CTA
        'contact-cta-title': 'Ready to Start Your Project?',
        'contact-cta-button': 'Submit Request',
        // Footer
        'footer-address': 'Montreal, Quebec',
        'footer-hours-title': 'Business Hours',
        'footer-hours': 'Mon - Fri: 8 AM - 6 PM',
        'footer-hours-sat': 'Sat: 9 AM - 4 PM',
        'footer-hours-sun': 'Sun: Closed',
        'footer-follow': 'Follow Us',
    },
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-gallery': 'Galerie',
        'nav-testimonials': 'Témoignages',
        'nav-contact': 'Contact',
        // Hero Section
        'hero-title': 'Services de peinture professionnels à Montréal',
        'hero-subtitle': 'Peinture intérieure et extérieure de haute qualité et conseils en design.',
        'hero-cta': "Demandez votre estimation gratuite aujourd'hui!",
        // Services Section
        'services-title': 'Nos Services',
        'service1-title': 'Peinture Intérieure',
        'service1-desc': 'Transformez vos espaces de vie avec nos services de peinture intérieure professionnelle.',
        'service2-title': 'Peinture Extérieure',
        'service2-desc': "Améliorez l'attrait de votre maison avec une peinture extérieure durable.",
        'service3-title': "Conseil en Design d'Intérieur",
        'service3-desc': "Obtenez des conseils d'experts pour créer des espaces beaux et fonctionnels.",
        // Testimonials
        'testimonials-title': 'Ce que disent nos clients',
        'testimonial1': '"Simon et son équipe ont fait un travail incroyable en peignant notre maison. Très professionnels et une grande attention aux détails !"',
        // Gallery
        'gallery-title': 'Nos Réalisations',
        // Contact CTA
        'contact-cta-title': 'Prêt à démarrer votre projet ?',
        'contact-cta-button': 'Envoyer une demande',
        // Footer
        'footer-address': 'Montréal, Québec',
        'footer-hours-title': "Heures d'ouverture",
        'footer-hours': 'Lun - Ven : 8h - 18h',
        'footer-hours-sat': 'Sam : 9h - 16h',
        'footer-hours-sun': 'Dim : Fermé',
        'footer-follow': 'Suivez-nous',
    }
};

// Function to switch language
function switchLanguage(lang) {
    // Save selected language in localStorage
    localStorage.setItem('language', lang);

    // Get all elements with data-key attribute
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key] || key;
    });
}

// Detect language on page load
window.onload = function() {
    const lang = localStorage.getItem('language') || (navigator.language.startsWith('fr') ? 'fr' : 'en');
    switchLanguage(lang);
};
