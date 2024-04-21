function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// When the toggleMenu is called, it toggles the "open" class on both "menu" & "icon"
// If the element has the class "open", it removes it.
// If the element does not have the class "open", it adds it.
