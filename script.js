// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("show");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

// CONTACT ENQUIRY
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;

        const formData = new FormData(contactForm);
        const message = [
            "Hello Sandeep, I would like to discuss a website project.",
            "Name: " + formData.get("name"),
            "Email: " + formData.get("email"),
            "Service: " + formData.get("service"),
            "Project details: " + formData.get("message")
        ].join("\n");
        const whatsappUrl = "https://wa.me/917807600465?text=" + encodeURIComponent(message);
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
}
