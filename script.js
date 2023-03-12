const hamburger = document.querySelector(".hamburger")
const navlist = document.querySelector(".nav-list")

const toggleClass = () =>{
    navlist.classList.toggle("active")
}

const removeClass = () =>{
    navlist.classList.remove("active")
}

hamburger.addEventListener("click", toggleClass)

navlist.addEventListener('click', removeClass)
