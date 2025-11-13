const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
console.log(nav, toggle);
toggle.addEventListener('click', () => {
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
});