const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
console.log(nav, toggle);
toggle.addEventListener('click', () => {
    const isOpen = toggle.ariaExpanded === "true";
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = !isOpen;
});