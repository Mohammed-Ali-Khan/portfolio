// Toggle visibility of sections when clicking on navigation links
function showPortfolio() {
    hideAllSections();
    document.getElementById('portfolio').classList.add('visible');
    setActiveButton('portfolio');
}
function showAbout() {
    hideAllSections();
    document.getElementById('about').classList.add('visible');
    setActiveButton('about');
}
function showContact() {
    hideAllSections();
    document.getElementById('contact').classList.add('visible');
    setActiveButton('contact');
}
function hideAllSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('visible'));
}
function setActiveButton(buttonId) {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${buttonId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}