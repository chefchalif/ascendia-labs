// script.js
function setLanguage(lang) {
    const content = document.getElementById('content');
    if (lang === 'en') {
        content.innerHTML = `
            <h1>Welcome to Simon Peinture</h1>
            <p>We provide high-quality interior and exterior painting services.</p>
            <a class="cta-button" href="contact.html">Request a Free Quote</a>
        `;
    } else if (lang === 'fr') {
        content.innerHTML = `
            <h1>Bienvenue chez Simon Peinture</h1>
            <p>Nous offrons des services de peinture intérieure et extérieure de haute qualité.</p>
            <a class="cta-button" href="contact.html">Demander un devis gratuit</a>
        `;
    }
}
