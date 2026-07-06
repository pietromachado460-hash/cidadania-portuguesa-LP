// ======================
// FAQ ABRIR / FECHAR
// ======================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});

// ======================
// ANIMAÇÃO AO ROLAR
// ======================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".card, .right-card, .step, .faq-item"
);

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ======================
// BOTÃO VOLTAR AO TOPO
// ======================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.classList.add("back-to-top");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ======================
// CONTADOR ANIMADO
// ======================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});
