const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
console.log(nav, toggle);
toggle.addEventListener('click', () => {
    const isOpen = toggle.ariaExpanded === "true";
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = !isOpen;
    body.classList.toggle('noscroll');
});