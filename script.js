const themeSwitcher = document.getElementById('switch-theme');

themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

window.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.toggle('dark');
});


