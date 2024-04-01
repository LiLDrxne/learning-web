const menu = document.getElementById("menu");

const openMenuButton = document.getElementById("open-menu-button");

const closeMenuButton = document.getElementById("close-menu-button");

openMenuButton.addEventListener("click", ()=>{
    menu.classList.add('open')
})

closeMenuButton.addEventListener("click", ()=>{
    menu.classList.remove('open')
})