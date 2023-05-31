document.addEventListener("DOMContentLoaded", function() {
  // Match the nav link that corresponds to the current page and highlight it
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1); 
    const navLinks = document.querySelectorAll(`a[href='${currentPage}']`);
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add("active");
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// Display mobile menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close mobile menu when clicking on a nav link
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}