// =========================================================
// MOBILE NAVIGATION
// =========================================================

const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");
menuButton.innerHTML = "☰";

menuButton.setAttribute("aria-label", "Toggle navigation");
menuButton.setAttribute("aria-expanded", "false");

navbar.appendChild(menuButton);


// Open / Close mobile menu

menuButton.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    if (isOpen) {

        menuButton.innerHTML = "✕";

        menuButton.setAttribute("aria-expanded", "true");

    } else {

        menuButton.innerHTML = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    }

});


// Close menu when clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.innerHTML = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    });

});


// Close menu when clicking outside

document.addEventListener("click", (event) => {

    if (
        navLinks.classList.contains("active") &&
        !navbar.contains(event.target)
    ) {

        navLinks.classList.remove("active");

        menuButton.innerHTML = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    }

});


// =========================================================
// NAVBAR ON SCROLL
// =========================================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const sections = document.querySelectorAll(
    ".about-section, .skills-section, .projects-section, .education-section, .github-section"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================================================
// CURRENT YEAR
// =========================================================

const yearElement = document.querySelector("#current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}