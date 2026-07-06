// ======================
// FAQ ABRIR / FECHAR
// ======================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach((item) => {

            if (item !== answer) {
                item.style.display = "none";
            }

        });

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
    ".card, .right-card, .step, .faq-item, .stat-card"
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
const statsSection = document.querySelector(".stats");

let countersStarted = false;

function startCounters() {

    counters.forEach(counter => {

        counter.innerText = "0";

        const target = +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current = +counter.innerText;
            const increment = target / 100;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    if (
        !countersStarted &&
        statsSection &&
        statsSection.getBoundingClientRect().top < window.innerHeight - 100
    ) {

        countersStarted = true;
        startCounters();

    }

});

// ======================
// ANO AUTOMÁTICO NO RODAPÉ
// ======================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ======================
// BOTÃO DO TOPO MUDA DE COR
// ======================

const navButton = document.querySelector(".btn-nav");

window.addEventListener("scroll", () => {

    if (!navButton) return;

    if (window.scrollY > 300) {

        navButton.style.background = "#25D366";

    } else {

        navButton.style.background = "#B52D34";

    }

});
