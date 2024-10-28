// script.js

// Translation content
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contact',
        // Hero Section
        'hero-title': 'Professional Painting Services in Montreal',
        'hero-subtitle': 'High-quality interior and exterior painting and design consultation.',
        'hero-cta': 'Request your free estimate today!',
        // Services Section
        'services-title': 'Our Services',
        'service1-title': 'Interior Painting',
        'service1-desc': 'High-quality interior painting to refresh your living spaces.',
        'service2-title': 'Exterior Painting',
        'service2-desc': 'Durable exterior painting for lasting curb appeal.',
        'service3-title': 'Interior Design Consulting',
        'service3-desc': 'Expert advice to create beautiful and functional spaces.',
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
        'footer-phone': 'Phone:',
        'footer-hours-title': 'Business Hours',
        'footer-hours': 'Mon - Fri: 8 AM - 6 PM',
        'footer-hours-sat': 'Sat: 9 AM - 4 PM',
        'footer-hours-sun': 'Sun: Closed',
        'footer-follow': 'Follow Us',
        'contact-form-title': 'Contact Us',
        'contact-form-subtitle': "Please fill out the form below, and we'll get back to you shortly.",
        'form-name': 'Name / Nom:',
        'form-email': 'Email:',
        'form-phone': 'Phone Number / Numéro de téléphone:',
        'form-message': 'Project Description / Description du projet:',
        'form-upload': 'Upload Photos (Optional):',
        'form-submit': 'Submit Request',
    },
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-gallery': 'Galerie',
        'nav-contact': 'Contact',
        // Hero Section
        'hero-title': 'Services de peinture professionnels à Montréal',
        'hero-subtitle': 'Peinture intérieure et extérieure de haute qualité et conseils en design.',
        'hero-cta': "Demandez votre estimation gratuite aujourd'hui!",
        // Services Section
        'services-title': 'Nos Services',
        'service1-title': 'Peinture Intérieure',
        'service1-desc': 'Peinture intérieure de haute qualité pour rafraîchir vos espaces de vie.',
        'service2-title': 'Peinture Extérieure',
        'service2-desc': 'Peinture extérieure durable pour un attrait durable.',
        'service3-title': "Conseil en Design d'Intérieur",
        'service3-desc': "Conseils d'experts pour créer des espaces beaux et fonctionnels.",
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
        'footer-phone': 'Téléphone :',
        'footer-hours-title': "Heures d'ouverture",
        'footer-hours': 'Lun - Ven : 8h - 18h',
        'footer-hours-sat': 'Sam : 9h - 16h',
        'footer-hours-sun': 'Dim : Fermé',
        'footer-follow': 'Suivez-nous',
        'contact-form-title': 'Contactez-nous',
        'contact-form-subtitle': 'Veuillez remplir le formulaire ci-dessous et nous vous contacterons sous peu.',
        'form-name': 'Nom / Name :',
        'form-email': 'Courriel :',
        'form-phone': 'Numéro de téléphone / Phone Number :',
        'form-message': 'Description du projet / Project Description :',
        'form-upload': 'Télécharger des photos (Optionnel) :',
        'form-submit': 'Envoyer une demande',
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
