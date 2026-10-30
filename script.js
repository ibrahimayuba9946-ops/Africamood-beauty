
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

console.log("Africamood Beauty est prêt !");

const formulaire = document.getElementById("signup-form");
const message = document.getElementById("message");

if (formulaire && message) {
    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        message.textContent =
            "Votre formulaire a été rempli avec succès !";

        formulaire.reset();
    });
}

const contactForm = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

if (contactForm && confirmation) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        confirmation.textContent =
            "Merci ! Votre message a été pris en compte.";
        contactForm.reset();
    });
}
