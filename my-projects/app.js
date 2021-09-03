const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");


// Display Mobile Menu
menu.addEventListener("click", () => {
    menuLinks.classList.toggle("active")
    menu.classList.toggle("is-active")
})


// menu item add class
/* const navLogo = document.querySelectorAll(".navbar__links");
// console.log(navLogo[0])
navLogo.forEach(e => {
    // console.log(e)
    e.addEventListener("click", () => {
        navLogo.forEach(e => {
            e.classList.remove("highlight")
        })
        e.classList.add("highlight")

    })
}) */


// menu item add class
const highLightMenu = () => {
    const elem = document.querySelector(".highlight")
    const homeMenu = document.querySelector("#home-page")
    const aboutMenu = document.querySelector("#about-page")
    const serviceMenu = document.querySelector("#services-page")
    let scrollPos = window.scrollY

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add("highlight")
        homeMenu.classList.remove("highlight")
        serviceMenu.classList.remove("highlight")
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        serviceMenu.classList.add("highlight")
        aboutMenu.classList.remove("highlight")
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos <600) || elem) {
        elem.classList.remove("highlight")
    }
}
window.addEventListener("scroll", highLightMenu)
window.addEventListener("click", highLightMenu)



