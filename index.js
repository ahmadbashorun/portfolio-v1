let openNavIcon = document.getElementById("open-nav-icon")
let navMenu = document.getElementById("nav-menu")
let closeNavIcon = document.getElementById("close-nav-icon")

const openNavMenu = ()=>{
    navMenu.classList.add("nav-menu-shown" )
}

openNavIcon.addEventListener('click', openNavMenu)

const closeNavMenu = () =>{
    navMenu.classList.remove("nav-menu-shown")

}

closeNavIcon.addEventListener('click', closeNavMenu)

