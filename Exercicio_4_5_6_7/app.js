const button = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

button.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open')
})