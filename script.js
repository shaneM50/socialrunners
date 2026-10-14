function setFooterYear() {
  const yearElement = document.getElementById('year');
  if (!yearElement) return;

  yearElement.textContent = new Date().getFullYear();
}

/* --- Localization logic --- */
const LOCALES = {
  es: window.LOCALE_ES || {},
  en: window.LOCALE_EN || {},
};

function applyLocaleToTextNodes(dictionary) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = dictionary[key];
    if (!value) return;

    if (value.includes('\n')) {
      element.replaceChildren();
      value.split('\n').forEach((line, index) => {
        if (index > 0) element.appendChild(document.createElement('br'));
        element.appendChild(document.createTextNode(line));
      });
    } else {
      element.textContent = value;
    }
  });
}

function setLanguage(lang) {
  const dictionary = LOCALES[lang];
  if (!dictionary) return;

  applyLocaleToTextNodes(dictionary);

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const buttonLanguage = button.getAttribute('data-lang');
    button.classList.toggle('active', buttonLanguage === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('preferredLanguage', lang);
}

function initializeLanguageToggle() {
  const languageButtons = document.querySelectorAll('.lang-btn');
  if (!languageButtons.length) return;

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.getAttribute('data-lang'));
    });
  });

  const savedLanguage = localStorage.getItem('preferredLanguage');
  setLanguage(savedLanguage === 'es' ? 'es' : 'en');
}

/* --- Mobile navigation --- */
function initializeNavToggle() {
  const toggleButton = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleButton || !navLinks) return;

  toggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

function initializePage() {
  setFooterYear();
  initializeLanguageToggle();
  initializeNavToggle();
}

initializePage();
