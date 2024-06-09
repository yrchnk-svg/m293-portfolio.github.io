// Mobile Navigation
// Stellt sicher, dass während der Öffnung der Navigation alles andere unsichtbar bleibt.
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('check');
    const mobileNav = document.getElementById('mobile-nav');
    const mainContent = document.getElementById('main-content');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            mobileNav.classList.add('active');
            mainContent.classList.add('hidden');
        } else {
            mobileNav.classList.remove('active');
            mainContent.classList.remove('hidden');
        }
    });
});