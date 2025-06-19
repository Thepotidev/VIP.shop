const icon = document.getElementById('toggle-icon')
const menu = document.getElementById('toggle-menu')

icon.addEventListener('click', () => {
    menu.classList.toggle('show')
})