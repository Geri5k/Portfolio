let datum = new Date();
let jahr = datum.getFullYear();
document.getElementById("jahr").textContent = jahr;

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let id = entry.target.id;

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    rootMargin: "-45% 0px -45% 0px"
});

sections.forEach((section) => {
    observer.observe(section);
});

let karten = document.querySelectorAll(".karte");

let karteObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("sichtbar");
        }
    });
});

karten.forEach((karte) => {
    karteObserver.observe(karte);
});