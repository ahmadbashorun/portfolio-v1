let openNavIcon = document.getElementById("open-nav-icon")
let navMenu = document.getElementById("nav-menu")
let closeNavIcon = document.getElementById("close-nav-icon")

const openNavMenu = ()=>{
    navMenu.classList.remove("nav-menu-dropdown")
    navMenu.classList.add("nav-menu-shown" )
}

openNavIcon.addEventListener('click', openNavMenu)

const closeNavMenu = () =>{
    if(!navMenu.classList.contains("nav-menu-dropdown")){
        navMenu.classList.remove("nav-menu-shown")
        navMenu.classList.add("nav-menu-dropdown")
    }
}

closeNavIcon.addEventListener('click', closeNavMenu)