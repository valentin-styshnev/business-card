function toggleLanguage() {
    const currentLang = localStorage.getItem('preferredLang') || 'en';
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
}

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update the document title
    if (translations[lang].title) {
        document.title = translations[lang].title;
    }

    // Update the toggle button text
    const btn = document.getElementById('lang-switch');
    if (btn) {
        btn.textContent = lang === 'en' ? 'RU' : 'EN';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
});
