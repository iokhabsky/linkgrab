document.addEventListener("DOMContentLoaded", () => {
    /* ============================= */
    /* SCROLL REVEAL */
    /* ============================= */

    const revealElements = document.querySelectorAll(
        ".feature-card, .step, .section-heading, .cta-box"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
            }
        );

        revealElements.forEach((element) => {
            element.classList.add("reveal");

            observer.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });
    }


    /* ============================= */
    /* HEADER SHADOW */
    /* ============================= */

    const header = document.querySelector(".header");

    const updateHeader = () => {
        if (!header) {
            return;
        }

        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* ============================= */
    /* SMOOTH ANCHOR SCROLL */
    /* ============================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        });
});