
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkToggle");

    if (!toggle) {
        console.error("Dark toggle button not found");
        return;
    }

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        console.log("Dark mode toggled");
    });
});
// Active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
