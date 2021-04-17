const navToggle = document.querySelector('.toggle')
const menuItems = document.querySelector('.menu_items')

navToggle.addEventListener("click",() => {
    menuItems.classList.toggle('nav-menu_visible')
})